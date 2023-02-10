import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ContactComponent } from "./contact/contact.component";


// by using interface we can impliment this canDeactivate in multiple components
export interface IDeactivateComponent{
  canExit: ()=> Observable<boolean> | Promise<boolean> | boolean;
}


//by using bellow class we can impliment only for one component
export class canDeactivateService implements CanDeactivate <ContactComponent>  {
  canDeactivate(component: ContactComponent, currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, nextState: RouterStateSnapshot ): boolean  {
       return component.canExit()
  }
}