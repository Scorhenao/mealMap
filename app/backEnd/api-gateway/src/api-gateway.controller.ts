import { Controller, Get } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Controller()
export class ApiGatewayController {
  constructor(private http: HttpService) {}

  @Get()
  getHello() {
    console.log("hola");
    const data=this.http.get('http://localhost:3001/hola').pipe(
      map(respo => respo.data)
    );
    return data;
  }

  @Get("users")
  getUser() {
    const data= this.http.get("http://localhost:3002/user").pipe(
      map(respo => respo.data)
    );
    return data;
  }
}
