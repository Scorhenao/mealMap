import { HttpService } from '@nestjs/axios';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class ConfirmOrderInterceptor implements NestInterceptor {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const res: Response = context.switchToHttp().getResponse();

    return next.handle().pipe(
      tap(async () => {
        if (res.statusCode === 200) {
          const ingredientCount = {};

          for (const dish of req.body.dishes) {
            for (const ingredient of dish.ingredient) {
              const name = ingredient.name;

              if (ingredientCount[name]) {
                ingredientCount[name] += 1;
              } else {
                ingredientCount[name] = 1;
              }
            }
          }

          const ingredientsArray = Object.entries(ingredientCount).map(
            ([name, quantity]) => ({
              name,
              quantity,
            }),
          );
       
          await this.httpService.axiosRef.post(
            'http://localhost:3000/notifyOrder',
            ingredientsArray,
          );
        }
      }),
    );
  }
}
