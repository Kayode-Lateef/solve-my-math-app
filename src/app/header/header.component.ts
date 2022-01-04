import { Component, OnInit } from '@angular/core';

declare var myJs: any;
new myJs ();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    new myJs ();
  }
}
