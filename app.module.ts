import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursessComponent } from './coursess/coursess.component';
import { ContactComponent } from './contact/contact.component';
import { userSrvice } from './services/service';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './coursess/course/course.component';
import { routeGuardServise } from './RouteGuard';
import { AuthServices } from './authServises';
import { canDeactivateService } from './canDeactivate-guard';
import { courseResolveService } from './resolve.service';
//import { canDeactivateService } from './canDeactivate-guard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursessComponent,
    ContactComponent,
    ErrorComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [userSrvice,routeGuardServise,AuthServices, canDeactivateService,courseResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
