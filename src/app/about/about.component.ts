import { Component, Inject, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: any = {};

  constructor(private config: ConfigService) { }

// : void
  ngOnInit() {
    this.about = this.getAbout();
  }

  getAbout() {
    return this.config.getConfig().about;
  }

}
