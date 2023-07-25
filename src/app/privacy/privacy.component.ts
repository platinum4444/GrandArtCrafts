import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  idioma: any = "Esp";
  constructor(router: Router) {

    let lang = localStorage.getItem('lang');

    if (lang == "pol") {
      router.navigateByUrl('/privacy-pol');

    }

 }

  ngOnInit(): void {
  }

}
