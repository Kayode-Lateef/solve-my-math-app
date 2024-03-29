import { Component, Inject, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

 hero : any = {};

  constructor(private config: ConfigService) { }

  // : void
  ngOnInit(){
    this.hero = this.getHero();
  }

  getHero() {
    return this.config.getConfig().hero;
  }

}
