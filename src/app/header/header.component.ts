import { Component, OnInit } from '@angular/core';

import {myFunction} from '../assets/js/main.js';

declare const myFunction: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  test() {
    myFunction();
  }

  constructor() { }


  ngOnInit(): void {
  }
}
