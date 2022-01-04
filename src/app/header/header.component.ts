import { Component, OnInit } from '@angular/core';

declare function on(): void; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { 
    on();
  }

  ngOnInit(): void {
  }
}
