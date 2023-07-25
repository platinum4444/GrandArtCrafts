import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { PaintingsService } from "../paintings.service";
import{GoogleAnalyticsService} from '../google-analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentLanguage: string = "pol";
  paintings: any;
  datos: FormGroup;
  subscribeDatos: FormGroup;
  isSent: any = null;

  constructor(private formBuilder: FormBuilder, private googleAnalyticsService: GoogleAnalyticsService,private translate: TranslateService, private paintingsService: PaintingsService, private title: Title, private meta: Meta) {

    this.datos = this.formBuilder.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      emailConfirmed: ['', Validators.required ],
      message: ['', Validators.required ],
    });

    this.subscribeDatos = this.formBuilder.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ]
    });

    this
     .googleAnalyticsService
     .eventEmitter("home", "shop", "cart", "click", 10);

  }

  ngOnInit() {

    this.getPaintings();
    this.title.setTitle("PAINT BY NUMBERS | FREE DELIVERY | GRANDART");
    this.meta.updateTag({name: "description", content: "Treat yourself to one of our unique designs. All our Painting by numbers come with a canvas mounted on a frame, an exquisite package, a magnifier, and…"});
    this.currentLanguage = String(localStorage.getItem("lang"));

  }

  getPaintings() {
    this.paintingsService.getPaintings().subscribe((data) => {

      this.paintings = data;

    });
  }

  isVertical(position: string) {

    if (position == "vertical") {
      return true;
    } else {
      return false;
    }
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



  subscribe(formValue: any) {

    this.paintingsService.subscribeNewsletter(formValue).subscribe(
      data => {
        // Handle result


        this.isSent = true;
      },
      error => {
        if (error.status === 200) {
          this.isSent = true;
        } else {

          this.isSent = false;
        }

      },

    );

  }
}

