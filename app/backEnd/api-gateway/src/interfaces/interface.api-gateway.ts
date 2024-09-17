import { Observable } from 'rxjs';
<<<<<<< HEAD
=======
import { dtoCreateUser } from 'src/common/dto/dto.routeUser';
>>>>>>> da0c46f65fd187ca4320a5183fc53811216b6581

export interface handleMicroservices {
  returnOneUser(dataUser:any): any;

<<<<<<< HEAD
  // returnAllUsers():Observable<User[]>;

  // returnOneIngredients():Observable<Ingredient>;

  // returnAllIngredients():Observable<Ingredient[]>;

  //    // returnOneOrder():Observable<>;
  //    // returnAllOrders():Observable<>;
  //     sendNewUser(data:User):Observable<User>;

  //     sendNewIngredient(data:Ingredient):Observable<Ingredient>;

  //     updateUser(data:Partial<User>):Observable<User>;

  //     deleteIngredient(id:number):Observable<true>;
  //     deleteUser(id:string):Observable<true>;
}
=======
export interface handleMicroservices{
    returnOneUser(dtoCreateUser:dtoCreateUser):Observable<User>;
}
>>>>>>> da0c46f65fd187ca4320a5183fc53811216b6581
