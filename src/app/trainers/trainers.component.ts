import { Component, Inject, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  trainers : any = {};

  constructor(private config: ConfigService) { }

// : void
  ngOnInit() {
    this.trainers = this.getTrainers();
  }

  getTrainers() {
    return this.config.getConfig().trainers;
  }
  
}
