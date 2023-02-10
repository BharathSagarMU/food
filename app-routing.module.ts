import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursessComponent } from './coursess/coursess.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './coursess/course/course.component';
import { routeGuardServise } from './RouteGuard';
import { canDeactivateService } from './canDeactivate-guard';
import { courseResolveService } from './resolve.service';
//import { canDeactivateService } from './canDeactivate-guard';

const appRoute: Routes =[
  { path:'', component: HomeComponent},
  //{ path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent},
  { path: 'About', component: AboutComponent},
  { path: 'Coursess', component: CoursessComponent, resolve: {courses: courseResolveService} },
  // { path: 'Coursess/course/:id', component: CourseComponent},
  { path: 'Coursess', canActivateChild: [routeGuardServise],  children : [
    {path: 'course/:id', component: CourseComponent}
  ]},
  { path: 'Contact', canDeactivate: [canDeactivateService], component: ContactComponent},
  { path: '**', component:ErrorComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute, {enableTracing: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
