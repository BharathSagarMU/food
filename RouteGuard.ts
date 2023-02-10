import { Injectable } from "@angular/core";
import { ActivatedRoute, CanActivate, Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AppComponent } from "./app.component";
import { AuthServices } from "./authServises";

@Injectable()
export class routeGuardServise  implements CanActivate, CanActivateChild{
constructor( private authservise: AuthServices, private roter: Router) {}
 
 canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authservise.isAuthenticate()){
        return true
    }
    else{
        this.roter.navigate([''])
         return false
    }
 }

 canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     return this.canActivate( childRoute,state);
 }

}