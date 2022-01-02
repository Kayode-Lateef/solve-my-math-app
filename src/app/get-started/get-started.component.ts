import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  getStarted : any = {};

  constructor(private config: ConfigService) { }

// : void
  ngOnInit() {
    this.getStarted = this.getGetStarted();
  }

  getGetStarted() {
    return this.config.getConfig().getStarted;
  }

}
