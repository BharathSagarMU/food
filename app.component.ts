import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router,Event, NavigationCancel, NavigationError } from '@angular/router';
import { AuthServices } from './authServises';
import { routeGuardServise } from './RouteGuard';
import { userSrvice } from './services/service';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'courseProject';
  displayLoadingIndicator = false ;

  constructor( private userservice: userSrvice, private activatedroute: ActivatedRoute,
    private authservice: AuthServices, private router:Router){

  }

  ngOnInit(){
    this.activatedroute.fragment.subscribe( (vlaue)=>{
    this.jumpTo(vlaue)
    } )

    this.router.events.subscribe((routerEvent: Event ) => {
      if (routerEvent instanceof NavigationStart){
        this.displayLoadingIndicator = true
   }

   if (routerEvent instanceof NavigationEnd || 
    routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
     this.displayLoadingIndicator = false;
   }
    })
    
  }

  jumpTo(section: any){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
  }

  login(){
    this.authservice.login()
  }

  logout(){
   this.authservice.logout()
  }
}
