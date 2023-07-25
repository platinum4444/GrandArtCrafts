import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgcInitializeEvent, NgcNoCookieLawEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { Subscription, Observable }   from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import{Router, NavigationEnd} from '@angular/router';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  title = 'grandart';
  currentLanguage: string = "pol";
  private popupOpenSubscription!: Subscription;
  private popupCloseSubscription!: Subscription;
  private initializeSubscription!: Subscription;
  private statusChangeSubscription!: Subscription;
  private revokeChoiceSubscription!: Subscription;
  private noCookieLawSubscription!: Subscription;
  private languageChosen: any = "no";
  moneda: any = "£ 20.90";

  constructor( private translate: TranslateService, private activatedRoute: ActivatedRoute, public router: Router) {

    this.router.events.subscribe(event => {
         if(event instanceof NavigationEnd){
             gtag('config', 'G-TJ0VVB6296',
                   {
                     'page_path': event.urlAfterRedirects
                   }
                  );
          }
       });

    this.activatedRoute.queryParams.subscribe((params:any) => {
      if (params['lang']) {
        this.languageChosen = params['lang'];
      }


      this.checkLanguage();

  });


  }

  changeLanguage(lang: string) {


    this.translate.setDefaultLang(lang);
    localStorage.setItem('lang', lang);
  }

  // OBSOLETE
  checkLanguage() {



    let lang = localStorage.getItem('lang');

    if (this.languageChosen === "no") {

      if(lang === null) {

      this.translate.setDefaultLang("eng");
      localStorage.setItem('lang', 'eng');


    }else {



      this.changeLanguage(lang);
    }
    } else {



      this.changeLanguage(this.languageChosen);
    }



  }

  ngAfterViewInit() {


  }

  ngOnInit() {


  }

  setAPPLanguage() {
    this.translate.addLangs(['eng', 'pol', 'ger']);
    this.translate.setDefaultLang('pol');
  }

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializeSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }
}
