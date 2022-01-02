import { Component, Inject, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  
  featureImages: any = {};

  constructor(private config: ConfigService) { }

// : void
  ngOnInit() {
    this.featureImages = this.getFeature();
  }

  getFeature() {
    return this.config.getConfig().featureImages;
  }


}
