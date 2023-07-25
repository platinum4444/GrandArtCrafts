import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { PaintingsService } from "../paintings.service";

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css']
})
export class PaintingsComponent implements OnInit {

  currentLanguage: string = "pol";
  paintings: any;

  constructor(private translate: TranslateService, private paintingsService: PaintingsService, private title: Title, private meta: Meta) {

    this.meta.updateTag({name: "description", content: "This is a website for paintbynumbers."});

  }

  ngOnInit() {


    this.getPaintings();
    this.title.setTitle("Paintings");
    this.currentLanguage = String(localStorage.getItem("lang"));

  }

  isAvailable(painting: any) {

    let isAvailable;

    painting.available.forEach((avai:any) => {

      if (avai == this.currentLanguage) {
        isAvailable = true;
      }
    });
    return isAvailable;
  }

  isVertical(position: string) {


    if (position == "vertical") {
      return true;
    } else {
      return false;
    }
  }

  getPaintings() {
    this.paintingsService.getPaintings().subscribe((data) => {

      this.paintings = data;

    });
  }

}
