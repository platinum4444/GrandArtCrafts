import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {

  areAccepted: any;
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("cookies") == "true") {

      this.areAccepted = true;
    } else {

      this.areAccepted = false;
    }
  }

  allowCookies() {
    localStorage.setItem("cookies", "true");
    this.areAccepted = true;
  }

}
