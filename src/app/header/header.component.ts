import { Component, OnInit } from '@angular/core';

declare var myJs: any;

import '../src/assets/js/main.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    myJs ();
  }
}
