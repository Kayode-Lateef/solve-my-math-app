import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ContactComponent } from './contact/contact.component';
import { GetStartedComponent } from './get-started/get-started.component';

const routes: Routes = [
  { path: 'Home', component: HeroComponent },
  { path: 'About', component:  AboutComponent },
  { path: 'Courses', component: CoursesComponent },
  { path: 'Trainers', component: TrainersComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Get-started', component: GetStartedComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
