import { Component, Inject, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.css']
})
export class WhyUsComponent implements OnInit {

  whyUs: any = {};


  constructor(private config: ConfigService) { }

// : void
  ngOnInit() {
    this.whyUs = this.getWhyUs();
  }

  getWhyUs() {
    return this.config.getConfig().whyUs;
  }
}
