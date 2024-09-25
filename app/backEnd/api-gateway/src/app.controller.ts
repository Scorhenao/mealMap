import { HttpService } from '@nestjs/axios';
import {
  Body,
  Catch,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Req,
  Res,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { guardJwt } from './verify-jwt/guard/jwt.guard';
import { handleMicroservices } from './interfaces/interface.api-gateway';
import { errorManage } from './common/config/error.manage';
import { HttpExceptioManage } from './common/err/exception.fiulter';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import {
  ApiBody,
  ApiCookieAuth,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { createUserDto } from './common/dto/dtoRequest/createUser.dto';
import { createIngredientDto } from './common/dto/dtoRequest/createIngredient';
import { createDishDto } from './common/dto/dtoRequest/createDish';
import { loginDto } from './common/dto/dtoRequest/createToken';
import { createOrderDto } from './common/dto/dtoRequest/createOrder';
import { createUserResponse } from './common/dto/dtoResponse/createUser';
import { ingredientResponse } from './common/dto/dtoResponse/createIngredient';

@UseFilters(HttpExceptioManage)
@ApiTags('Routes for the services')
@Controller()
export class AppController implements handleMicroservices {
  constructor(
    @Inject() private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  @Post('user')
  @ApiBody({ type: createUserDto })
  @ApiOkResponse({
    description: 'user create correctly',
    type: createUserResponse,
  })
  async returnCreateUser(@Body() dataUser: createUserDto) {
    try {
      const data = await this.httpService.axiosRef.post(
        'http://localhost:3003/user',
        dataUser,
      );
      return data.data;
    } catch (err: any) {
      throw new errorManage({
        type: err.response.data.status,
        message: err.response.data.message,
      });
    }
  }

  @Get('allUsers')
  @ApiCookieAuth('access-token-cookie')
  @ApiCookieAuth('refresh-token-cookie')
  @ApiOkResponse({
    description: 'return all users',
    type: [createUserResponse],
  })
  @UseGuards(guardJwt)
  async returnAllUsers() {
    const allUser = await this.httpService.axiosRef.get(
      'http://localhost:3001/users',
    );
    return allUser.data;
  }

  @Get('user')
  @ApiCookieAuth('access-token-cookie')
  @ApiCookieAuth('refresh-token-cookie')
  @ApiOkResponse({
    description: 'return one user correctly',
    type: createUserResponse,
  })
  @UseGuards(guardJwt)
  async returnUser(@Req() request: any) {
    try {
      const oneUser = await this.httpService.axiosRef.get(
        'http://localhost:3003/user/' + request.decode.idUser,
      );
      return oneUser.data;
    } catch (err: any) {
      throw new errorManage({
        type: err.response.data.status,
        message: err.response.data.message,
      });
    }
  }

  @Post('Ingredient')
  @ApiCookieAuth('access-token-cookie')
  @ApiCookieAuth('refresh-token-cookie')
  @ApiBody({ type: createIngredientDto })
  @ApiOkResponse({
    description: 'create ingredient correctly',
    type: ingredientResponse,
  })
  @UseGuards(guardJwt)
  async createIngredient(@Body() dataIngredient: any, @Req() request: any) {
    try {
      const data = await this.httpService.axiosRef.post(
        'http://localhost:8080/ingredient',
        dataIngredient,
        {
          headers: {
            withCredentials: true,
            'X-Api-Key': this.configService.get<string>('API_KEY'),
            'X-Role': request.decode.role,
          },
        },
      );
      return data;
    } catch (err: any) {
      throw new err();
    }
  }

  @Post('Dish')
  @ApiCookieAuth('access-token-cookie')
  @ApiCookieAuth('refresh-token-cookie')
  @ApiBody({ type: createDishDto })
  @UseGuards(guardJwt)
  async createDish(@Body() dataDish: any, @Req() request: any) {
    try {
      const data = await this.httpService.axiosRef.post(
        'http://localhost:8080/dish',
        dataDish,
        {
          headers: {
            withCredentials: true,
            'X-Api-Key': this.configService.get<string>('API_KEY'),
            'X-Role': request.decode.role,
          },
        },
      );
      return data;
    } catch (err: any) {
      throw new err();
    }
  }

  @Post('login')
  @ApiBody({ type: loginDto })
  async returnJwt(@Body() datos: any, @Res() response2: Response) {
    try {
      console.log('enter');

      const request = await this.httpService.axiosRef.post(
        'http://localhost:3002/token',
        datos,
        {
          withCredentials: true,
          headers: {
            'X-Api-Key': this.configService.get<string>('API_KEY'),
          },
        },
      );
      response2.cookie('token2', request.data.acces_token, {
        httpOnly: true,
        signed: true,
      });

      response2.cookie('tokenRefresh', request.data.refres_token, {
        httpOnly: true,
        signed: true,
      });

      response2.status(200).json(true);
    } catch (err: any) {
      throw errorManage.createSignatureError(err.response.data.message);
    }
  }

  @Get('ingredients')
  @ApiCookieAuth('access-token-cookie')
  @ApiCookieAuth('refresh-token-cookie')
  //@UseGuards(guardJwt)
  async returnAllIngredients(@Req() request: any) {
    try {
      console.log('ohla');

      const peticion = await this.httpService.axiosRef.get(
        'http://localhost:8080/ingredients/readAll',
        {
          withCredentials: true,
          headers: {
            'X-Role': request.decode.role,
          },
        },
      );

      if (!peticion) {
        throw new errorManage({
          type: 'BAD_REQUEST',
          message: 'There is not ingredients',
        });
      }
      return peticion.data;
    } catch (err: any) {
      throw errorManage.createSignatureError(err.message);
    }
  }

  @Post('loginUser')
  async returnOneUser(@Body() dataUser: any) {
    try {
      let data = await this.httpService.axiosRef.post(
        'http://localhost:3003/user/userOne',
        dataUser,
        {
          withCredentials: true,
          headers: {
            'X-Api-Key': this.configService.get<string>('API_KEY'),
          },
        },
      );
      return data.data;
    } catch (err: any) {
      console.log(err.response.data);

      throw errorManage.createSignatureError(err.response.data.message);
    }
  }

  @Post('orders')
  @ApiCookieAuth('access-token-cookie')
  @ApiCookieAuth('refresh-token-cookie')
  @ApiBody({ type: createOrderDto })
  @UseGuards(guardJwt)
  async createOrder(
    @Body() dats: any,
    @Req() request2: any,
    @Res() response: Response,
  ) {
    try {
      const returnTable = await this.httpService.axiosRef.post(
        'http://localhost:8080/table/available/' + dats.quantityPeople,
      );

      const request = await this.httpService.axiosRef.post(
        'http://localhost:3001/orders',
        {
          ...request2.decode,
          ...returnTable,
          ...dats,
          //...returnTable.data
        },
        {
          withCredentials: true,
          headers: {
            'X-Api-Key': this.configService.get<string>('API_KEY'),
          },
        },
      );

      response.json(request.data);
    } catch (err: any) {
      throw new errorManage({
        type: err.response.data.status,
        message: err.response.data.message,
      });
    }
  }

  @Get('ordersToday')
  @ApiCookieAuth('access-token-cookie')
  @ApiCookieAuth('refresh-token-cookie')
  @ApiOkResponse({
    description: 'return order last 24hours',
    type: [createOrderDto],
  })
  @UseGuards(guardJwt)
  async getOrdersToday(@Req() request2: any, @Res() response: Response) {
    try {
      const request = await this.httpService.axiosRef.get(
        'http://localhost:3001',
        {
          withCredentials: true,
          headers: {
            'X-Api-Key': this.configService.get<string>('API_KEY'),
            'X-role': request2.decode.role,
          },
        },
      );

      response.json(request.data);
    } catch (err: any) {
      throw new errorManage({
        type: err.response.data.status,
        message: err.response.data.message,
      });
    }
  }

  // @Post("notifyOrder")
  // async giveDishesOrders(){
  //   try{
  //     await this.httpService.axiosRef.post("http://localhost:8080/dihesOrders"{

  //     })
  //   }catch(err:any){

  //   }
  // }

  @Patch()
  @ApiCookieAuth('access-token-cookie')
  @ApiCookieAuth('refresh-token-cookie')
  @UseGuards(guardJwt)
  updateUser(@Body() data: Partial<User>, @Req() request: any) {
    try {
      const dataReturn = this.httpService.axiosRef.patch(
        `http://localhost:3003/user/${request.decode.idUser}`,
        data,
      );
    } catch (err: any) {
      throw new errorManage({
        type: err.response.data.statusCode,
        message: err.response.data.message,
      });
    }
  }

  @Delete('user')
  @ApiCookieAuth('access-token-cookie')
  @ApiCookieAuth('refresh-token-cookie')
  @UseGuards(guardJwt)
  deleteUser(@Req() request: any) {
    try {
      const dataDelete = this.httpService.axiosRef.delete(
        `http://localhost:3003/user/${request.decode.idUser}`,
      );
    } catch (err: any) {
      throw new errorManage({
        type: err.response.data.statusCode,
        message: err.response.data.message,
      });
    }
  }

  @Delete('ingredient/:id')
  @ApiCookieAuth('access-token-cookie')
  @ApiCookieAuth('refresh-token-cookie')
  //@UseGuards(guardJwt)
  async deleteIngredient(@Req() request: any, @Param('id') id: string) {
    try {
      const dataDelete = await this.httpService.axiosRef.delete(
        `http://localhost:8080/ingredients/delete/${+id}`,
      );
      return dataDelete.data;
    } catch (err: any) {
      throw new errorManage({
        type: err.response.data.statusCode,
        message: err.response.data.message,
      });
    }
  }
}
