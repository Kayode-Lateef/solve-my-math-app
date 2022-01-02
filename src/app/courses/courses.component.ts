import { Component, Inject, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses : any = {};


  constructor(private config: ConfigService) { }

// : void
  ngOnInit() {
    this.courses = this.getCourses();
  }

  getCourses() {
    return this.config.getConfig().courses;
  }

}
