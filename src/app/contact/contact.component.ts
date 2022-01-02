import { Component, Inject, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact : any = {};

  constructor(private config: ConfigService) { }

// : void
  ngOnInit() {
    this.contact = this.getContact();
  }

  getContact() {
    return this.config.getConfig().contact;
  }
}
