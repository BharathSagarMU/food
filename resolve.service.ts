import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { userSrvice } from "./services/service";

@Injectable()
export class courseResolveService implements Resolve<any> {
     
    constructor( private userservice: userSrvice ){}

       resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
           return this.userservice.getCourses().then((data:any)=>{
               return data
           })
       }  
}