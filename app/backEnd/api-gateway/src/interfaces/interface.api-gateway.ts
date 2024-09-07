import { Observable } from 'rxjs';
import { dtoCreateUser } from 'src/common/dto/dto.routeUser';


export interface handleMicroservices{
    returnOneUser(dtoCreateUser:dtoCreateUser):Observable<User>;
}