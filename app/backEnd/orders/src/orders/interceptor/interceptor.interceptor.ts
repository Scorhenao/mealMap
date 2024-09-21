import { HttpService } from '@nestjs/axios';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { map, Observable } from 'rxjs';

@Injectable()
export class ConfirmOrderInterceptor implements NestInterceptor {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const res: Response = context.switchToHttp().getResponse();
    
    return next.handle().pipe(
      map(async () => {        
        if (res.statusCode === 200) {
          console.log("HOLA");
          console.log(req.body.dishes);

          // Objeto para contar ingredientes
          const ingredientCount = {};

          for (const dish of req.body.dishes) {
            for (const ingredient of dish.ingredients) {
              const name = ingredient.name;

              // Incrementar la cantidad de cada ingrediente
              if (ingredientCount[name]) {
                ingredientCount[name] += 1; // Si ya existe, suma 1
              } else {
                ingredientCount[name] = 1; // Si no existe, inicializa en 1
              }
            }
          }

          // Convertir el objeto a un array de objetos
          const ingredientsArray = Object.entries(ingredientCount).map(([name, quantity]) => ({
            name,
            quantity
          }));

          console.log(ingredientsArray);
          
          // Aquí puedes llamar a la lógica que resta del stock
          // await this.someService.updateStock(ingredientsArray);
        }

        return true;
      })
    );
  }
}
