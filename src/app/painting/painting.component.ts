import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PaintingsService } from "../paintings.service";


@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.css']
})
export class PaintingComponent implements OnInit {

  mainImage: string = "";
  mainImageBack: string = "url("+ this.mainImage +")";
  apachePeq: string = "/assets/images/designs/apachepeq.png";
  paintingName: any = "";
  showModal = false;
  currentPainting: any;
  paintings: any;
  isPaintingFiltered: boolean = false;
  lang: any;

  toggleModal(){
    this.showModal = !this.showModal;
  }

  constructor(private route: ActivatedRoute, private paintingsService: PaintingsService) {

    this.getPaintings();



  }

  getPaintings() {
    this.paintingsService.getPaintings().subscribe((data) => {

      this.paintings = data;

    });
  }

  filterPainting() {
    return this.paintings.filter((x: { name: string; }) => x.name.toLowerCase() === this.paintingName)[0];
  }

  async getPaintingByName() {

    await this.getPaintings();

    await this.route.paramMap.subscribe(params => {

      // Obtenemos el nombre por la ruta, ya que hay que hacer split por que en la ruta viene apache-paint-by-numbers
      this.paintingName = params.get('name')?.replace(/-/g, " ");

      this.currentPainting = this.filterPainting();
      this.isPaintingFiltered = true;
      // Cambiamos la main Image
      this.mainImage = this.currentPainting.mainImage;

    });
     console.log(this.currentPainting);
  }

  ngOnInit(): void {
    this.getPaintingByName();
    this.lang = localStorage.getItem('lang');
    console.log(this.lang);

  }

  ngAfterViewInit() {

  }

  changeImage(image: any) {

    image = image.replace("https://blog.grandartcrafts.com/","");


    this.mainImage = image;

  }

}
