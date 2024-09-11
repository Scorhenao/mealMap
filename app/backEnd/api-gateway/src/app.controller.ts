import { HttpService } from '@nestjs/axios';
import {
  Body,
  Catch,
  Controller,
  Delete,
  Get,
  Inject,
  Patch,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { guardJwt } from './verify-jwt/guard/jwt.guard';
import { handleMicroservices } from './interfaces/interface.api-gateway';
import { errorManage } from './common/config/error.manage';
import { HttpExceptioManage } from './common/err/exception.fiulter';

@Controller()
export class AppController implements handleMicroservices {
  constructor(@Inject() private httpService: HttpService) {}

  @UseFilters(HttpExceptioManage)
  @Get('user')
  @UseGuards(guardJwt)
  returnOneUser(): Observable<User> {
    try {
      let data = this.httpService
        .get('http://localhost:3001')
        .pipe(map((response) => response.data));
      data = null;
      if (!data) {
        throw new errorManage({
          type: 'BAD_REQUEST',
          message: 'The user not found',
        });
      }
      return data;
    } catch (err: any) {
      throw errorManage.createSignatureError(err.message);
    }
  }

  @Get()
  @UseGuards(guardJwt)
  returnAllUsers(): Observable<User[]> {
    return this.httpService
      .get('http://localhost:3001/users')
      .pipe(map((response) => response.data));
  }

  // @Get()
  // returnOneIngredient():Observable<Ingredient>{}

  // @Get()
  // returnAllIngredients():Observable<Ingredient[]>{}

  @Get()
  returnOneOrder() {}

  @Get()
  returnAllOrders() {}

  @Post()
  sendNewUser(@Body() dataNewUser: User): Observable<User> {
    return this.httpService
      .post('http://localhost:3001/user', dataNewUser)
      .pipe(map((response) => response.data));
  }

  @Patch()
  updateUser(data: Partial<User>): Observable<User> {
    return this.httpService
      .patch('http://localhost:3001/user', data)
      .pipe(map((response) => response.data));
  }

  @Delete()
  deleteUser(id: string): Observable<true> {
    return this.httpService
      .delete('http://localhost:3001/user')
      .pipe(map((response) => response.data));
  }
}
