import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaintingsService {

  paintings: any = [
    {
      name: "Sugar Skull",
      mainImage: "/assets/images/designs/Sugar Skull.png",
      position: "vertical",
      images: {
        eng: [
        "/assets/images/designs/Sugar Skull.png",
        "/assets/images/listings/2 ss-un-as-dg-vm.png",
        "/assets/images/listings/3 (Small).png",
        "/assets/images/listings/4 ss-un-as-dg-vm.png",
        "/assets/images/listings/5 (todos menos apache).png",
        "/assets/images/listings/ss 6.jpg",
        "/assets/images/listings/ss 7.jpg",
        ],
        pol: [
        "/assets/images/designs/Sugar Skull.png",
        "/assets/images/listingspol/2 ss-un-as-dg-vm.png",
        "/assets/images/listingspol/3 (Small).png",
        "/assets/images/listingspol/4 ss-un-as-dg-vm.png",
        "/assets/images/listingspol/5 (todos menos apache).png",
        "/assets/images/listings/ss 6.jpg",
        "/assets/images/listings/ss 7.jpg",
        ],
      },
      price: 20,
      estimatedDelivery: 4,
      setOfColors: 24,
      available: ['eng', 'dut', 'pol'],
      countries: [
        {name: "United Kingdom", link: "https://www.amazon.co.uk/gp/product/B092DQPJWM/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B092DQPJWM&linkCode=as2&tag=grandart-21&linkId=726367591ae059c1f9f1279dc1fa6000"},
        {name: "Poland", link: "https://www.amazon.pl/gp/product/B092DQPJWM/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B092DQPJWM&linkCode=as2&tag=grandart09-21&linkId=2e243160b3f295a99ebe12d4d464abac"},
        {name: "Germany", link: "https://www.amazon.de/dp/B092DQPJWM?ref=myi_title_dp"}
      ],
      link: "sugar-skull"

    },
    {
      name: "Unicorn",
      mainImage: "/assets/images/designs/Unicorn.png",
      position: "vertical",
      images: {
        eng: [
        "/assets/images/designs/Unicorn.png",
        "/assets/images/listings/2 ss-un-as-dg-vm.png",
        "/assets/images/listings/3 (Small).png",
        "/assets/images/listings/4 ss-un-as-dg-vm.png",
        "/assets/images/listings/5 (todos menos apache).png",
        "/assets/images/listings/un 6.jpg",
        "/assets/images/listings/un 7.jpg",
        ],
        pol: [
        "/assets/images/designs/Unicorn.png",
        "/assets/images/listingspol/2 ss-un-as-dg-vm.png",
        "/assets/images/listingspol/3 (Small).png",
        "/assets/images/listingspol/4 ss-un-as-dg-vm.png",
        "/assets/images/listingspol/5 (todos menos apache).png",
        "/assets/images/listings/un 6.jpg",
        "/assets/images/listings/un 7.jpg",
        ],
      },
      price: 20,
      estimatedDelivery: 4,
      setOfColors: 24,
      available: ['eng', 'dut', 'pol'],
      countries: [
        {name: "United Kingdom", link: "https://www.amazon.co.uk/gp/product/B092DS28XK/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B092DS28XK&linkCode=as2&tag=grandart-21&linkId=f8988fad9be95656959bb519fda244a1"},
        {name: "Poland", link: "https://www.amazon.pl/gp/product/B092DS28XK/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B092DS28XK&linkCode=as2&tag=grandart09-21&linkId=dfa3f80438b5986d04c6094638bf4c99"},
        {name: "Germany", link: "https://www.amazon.de/dp/B092DS28XK?ref=myi_title_dp"}
      ],
      link: "unicorn"

    },

    {
      name: "Astronaut",
      mainImage: "/assets/images/designs/Astronaut.png",
      position: "vertical",
      images: {
        eng: [
        "/assets/images/designs/Astronaut.png",
        "/assets/images/listings/2 ss-un-as-dg-vm.png",
        "/assets/images/listings/3 (Small).png",
        "/assets/images/listings/4 ss-un-as-dg-vm.png",
        "/assets/images/listings/5 (todos menos apache).png",
        "/assets/images/listings/as 6.jpg",
        "/assets/images/listings/as 7.jpg",
        ],
        pol: [
        "/assets/images/designs/Astronaut.png",
        "/assets/images/listingspol/2 ss-un-as-dg-vm.png",
        "/assets/images/listingspol/3 (Small).png",
        "/assets/images/listingspol/4 ss-un-as-dg-vm.png",
        "/assets/images/listingspol/5 (todos menos apache).png",
        "/assets/images/listings/as 6.jpg",
        "/assets/images/listings/as 7.jpg",
        ],
      },
      price: 20,
      estimatedDelivery: 4,
      setOfColors: 24,
      available: ['eng', 'dut', 'pol'],
      countries: [
        {name: "United Kingdom", link: "https://www.amazon.co.uk/gp/product/B092DSDLF6/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B092DSDLF6&linkCode=as2&tag=grandart-21&linkId=9e3c2bd655940881704bf2dde0d64fc5"},
        {name: "Poland", link: "https://www.amazon.pl/gp/product/B092DSDLF6/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B092DSDLF6&linkCode=as2&tag=grandart09-21&linkId=249599f7888e92756c4a60d0f2ff3e82"},
        {name: "Germany", link: "https://www.amazon.de/dp/B092DSDLF6?ref=myi_title_dp"}
      ],
      link: "astronaut"

    },
    {
      name: "Kitten",
      mainImage: "/assets/images/designs/Kitten.png",
      position: "vertical",
      images: {
        eng: [
        "/assets/images/designs/Kitten.png",
        "/assets/images/listings/2 kitten.png",
        "/assets/images/listings/3 (Small).png",
        "/assets/images/listings/4 Kitten.png",
        "/assets/images/listings/5 (todos menos apache).png",
        "/assets/images/listings/kt 6.jpg",
        "/assets/images/listings/kt 7.jpg",
        ],
        pol: [
        "/assets/images/designs/Kitten.png",
        "/assets/images/listingspol/2 kitten.png",
        "/assets/images/listingspol/3 (Small).png",
        "/assets/images/listingspol/4 Kitten.png",
        "/assets/images/listingspol/5 (todos menos apache).png",
        "/assets/images/listings/kt 6.jpg",
        "/assets/images/listings/kt 7.jpg",
        ],
      },
      price: 20,
      estimatedDelivery: 4,
      setOfColors: 23,
      available: ['eng', 'dut', 'pol'],
      countries: [
        {name: "United Kingdom", link: "https://www.amazon.co.uk/gp/product/B092DT8T3B/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B092DT8T3B&linkCode=as2&tag=grandart-21&linkId=cb13dbfe39e51c7fc37c0637e4fb5ea9"},
        {name: "Poland", link: "https://www.amazon.pl/gp/product/B092DT8T3B/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B092DT8T3B&linkCode=as2&tag=grandart09-21&linkId=689ba9b4ed04db853d1a61c425518119"},
        {name: "Germany", link: "https://www.amazon.de/dp/B092DT8T3B?ref=myi_title_dp"}
      ],
      link: "kitten"

    },
    {
      name: "Pop Art Girl",
      mainImage: "/assets/images/designs/Pop Art Girl.png",
      position: "vertical",
      images: {
        eng: [
        "/assets/images/designs/Pop Art Girl.png",
        "/assets/images/listings/2 pop art girl.png",
        "/assets/images/listings/3 (Small).png",
        "/assets/images/listings/4 pop art girl.png",
        "/assets/images/listings/5 (todos menos apache).png",
        "/assets/images/listings/pg 6.jpg",
        "/assets/images/listings/pg 7.jpg",
        ],
        pol: [
        "/assets/images/designs/Pop Art Girl.png",
        "/assets/images/listingspol/2 pop art girl.png",
        "/assets/images/listingspol/3 (Small).png",
        "/assets/images/listingspol/4 pop art girl.png",
        "/assets/images/listingspol/5 (todos menos apache).png",
        "/assets/images/listings/pg 6.jpg",
        "/assets/images/listings/pg 7.jpg",
        ],
      },
      price: 20,
      estimatedDelivery: 4,
      setOfColors: 19,
      available: ['eng', 'dut', 'pol'],
      countries: [
        {name: "United Kingdom", link: "https://www.amazon.co.uk/gp/product/B092DSQZ11/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B092DSQZ11&linkCode=as2&tag=grandart-21&linkId=c5c740e8ef3438a7298e27adf3603dd8"},
        {name: "Poland", link: "https://www.amazon.pl/gp/product/B092DSQZ11/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B092DSQZ11&linkCode=as2&tag=grandart09-21&linkId=fb7374fb33d0a0b2c29ae5ef91fe5b9e"},
        {name: "Germany", link: "https://www.amazon.de/dp/B092DSQZ11?ref=myi_title_dp"}
      ],
      link: "pop-art-girl"

    },
    {
      name: "Dog",
      mainImage: "/assets/images/designs/Dog.png",
      position: "vertical",
      images: {
        eng: [
        "/assets/images/designs/Dog.png",
        "/assets/images/listings/2 ss-un-as-dg-vm.png",
        "/assets/images/listings/3 (Small).png",
        "/assets/images/listings/4 ss-un-as-dg-vm.png",
        "/assets/images/listings/5 (todos menos apache).png",
        "/assets/images/listings/dg 6.jpg",
        "/assets/images/listings/dg 7.jpg",
        ],
        pol: [
        "/assets/images/designs/Dog.png",
        "/assets/images/listingspol/2 ss-un-as-dg-vm.png",
        "/assets/images/listingspol/3 (Small).png",
        "/assets/images/listingspol/4 ss-un-as-dg-vm.png",
        "/assets/images/listingspol/5 (todos menos apache).png",
        "/assets/images/listings/dg 6.jpg",
        "/assets/images/listings/dg 7.jpg",
        ],
      },
      price: 20,
      estimatedDelivery: 4,
      setOfColors: 24,
      available: ['eng', 'dut', 'pol'],
      countries: [
        {name: "United Kingdom", link: "https://www.amazon.co.uk/gp/product/B092DK6JFM/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B092DK6JFM&linkCode=as2&tag=grandart-21&linkId=e4fc621de3a149179869069d43efedc9"},
        {name: "Poland", link: "https://www.amazon.pl/gp/product/B092DK6JFM/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B092DK6JFM&linkCode=as2&tag=grandart09-21&linkId=5e6726eac0f2466b07e144d108dad99d"},
        {name: "Germany", link: "https://www.amazon.de/dp/B092DK6JFM?ref=myi_title_dp"}
      ],
      link: "dog"

    },

    {
      name: "Venice Mask",
      mainImage: "/assets/images/designs/Venice Mask.png",
      position: "vertical",
      images: {
        eng: [
        "/assets/images/designs/Venice Mask.png",
        "/assets/images/listings/2 ss-un-as-dg-vm.png",
        "/assets/images/listings/3 (Small).png",
        "/assets/images/listings/4 ss-un-as-dg-vm.png",
        "/assets/images/listings/5 (todos menos apache).png",
        "/assets/images/listings/vm 6.jpg",
        "/assets/images/listings/vm 7.jpg",
        ],
        pol: [
        "/assets/images/designs/Venice Mask.png",
        "/assets/images/listingspol/2 ss-un-as-dg-vm.png",
        "/assets/images/listingspol/3 (Small).png",
        "/assets/images/listingspol/4 ss-un-as-dg-vm.png",
        "/assets/images/listingspol/5 (todos menos apache).png",
        "/assets/images/listings/vm 6.jpg",
        "/assets/images/listings/vm 7.jpg",
        ],
      },
      price: 20,
      estimatedDelivery: 4,
      setOfColors: 24,
      available: ['eng', 'dut', 'pol'],
      countries: [
        {name: "United Kingdom", link: "https://www.amazon.co.uk/gp/product/B092DP612Z/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B092DP612Z&linkCode=as2&tag=grandart-21&linkId=404a7eb7e2c3bddbf9abec53a436b762"},
        {name: "Poland", link: "https://www.amazon.pl/gp/product/B092DP612Z/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B092DP612Z&linkCode=as2&tag=grandart09-21&linkId=d2a4ab8b2cb955ad9f7175e25d7cd23c"},
        {name: "Germany", link: "https://www.amazon.de/dp/B092DP612Z?ref=myi_title_dp"}
      ],
      link: "venice-mask"

    },
    {
      name: "Apache",
      mainImage: "/assets/images/designs/Apache.png",
      position: "horizontal",
      images: {
        eng: [
        "/assets/images/designs/Apache.png",
        "/assets/images/listings/2 ss-un-as-dg-vm.png",
        "/assets/images/listings/3 (Small).png",
        "/assets/images/listings/4 ss-un-as-dg-vm.png",
        "/assets/images/listings/5 apache.png",
        "/assets/images/listings/Apache 6.jpg",
        "/assets/images/listings/Apache 7.jpg"
      ]},
      price: 20,
      estimatedDelivery: 6,
      setOfColors: 24,
      available: ['eng', 'dut'],
      countries: [
        {name: "United Kingdom", link: "https://www.amazon.co.uk/gp/product/B08CL4TZ22/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B08CL4TZ22&linkCode=as2&tag=grandart-21&linkId=56e2ca1889ce86d5146d292f63f0bbe5"}
      ],
      link: "apache"

    }
  ];

  constructor(public http: HttpClient) { }

  subscribeNewsletter(email: any) {

    const langSelected = localStorage.getItem('lang');

    return this.http.post( "https://blog.grandartcrafts.com/api/subscribe/" + langSelected, email );
  }

  getPaintings() {
    return of(this.paintings);
  }

  sendMail(data: any) {


    return this.http.post( "https://blog.grandartcrafts.com/api/send", data );

  }

  //Obsolete
  joinNewsletter(data: any) {


    return this.http.post( "https://blog.grandartcrafts.com/api/newsletter", data );

  }
}
