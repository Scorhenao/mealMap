import { HttpService } from "@nestjs/axios";
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";
import { AppService } from "src/app.service";
import { errorManage } from "src/common/error/error.Manage";

@Injectable()
export class localGuard extends AuthGuard("local"){}
