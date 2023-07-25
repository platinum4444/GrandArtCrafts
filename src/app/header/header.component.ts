import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  lang: any;

  constructor(private translate: TranslateService, private router: Router,) {

    this.setAPPLanguages();


  }


  ngOnInit(): void {
    $(document).ready(function(){

      $('.btn-open-menu').click(function () {
        $('header').addClass('open');
        $('header').css('z-index', '10');

    });

    $('.link-menu').click(function () {
        $('header').removeClass('open');
        if (window.innerWidth <= 1024) {
          $('header').css('z-index', '-10');
        }

    });

    $('.btn-close-menu').click(function () {
        $('header').removeClass('open');
        $('header').css('z-index', '-10');
    });
    });
  }

  changeLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
    localStorage.setItem('lang', lang);


    this.router.navigateByUrl('/', { skipLocationChange: true });
    window.location.reload();
  }

  goToBlog() {

    this.lang = localStorage.getItem('lang');

    window.location.href = "https://blog.grandartcrafts.com/lang/"+this.lang;
    return false;

  }

  setAPPLanguages() {
    this.translate.addLangs(['eng', 'pol', 'ger']);

  }


}
