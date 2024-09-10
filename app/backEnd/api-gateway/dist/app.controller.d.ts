import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { handleMicroservices } from './interfaces/interface.api-gateway';
export declare class AppController implements handleMicroservices {
    private httpService;
    constructor(httpService: HttpService);
    returnOneUser(): Observable<User>;
    returnAllUsers(): Observable<User[]>;
    returnOneOrder(): void;
    returnAllOrders(): void;
    sendNewUser(dataNewUser: User): Observable<User>;
    updateUser(data: Partial<User>): Observable<User>;
    deleteUser(id: string): Observable<true>;
}
