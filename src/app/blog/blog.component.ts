import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  prueba: any;
  constructor() {
    this.prueba = {code: `<h1>{{Welcome | translate}}</h1>`};

  }

  ngOnInit(): void {
  }

}
