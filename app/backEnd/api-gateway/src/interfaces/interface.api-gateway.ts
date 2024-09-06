import { Observable } from "rxjs";


export interface handleMicroservices{

    returnOneUser():Observable<User>;

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