import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PaintingsService } from "../paintings.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  datos: FormGroup;
  isSent: any = null;
  hasCopied: any = false;

  constructor(private formBuilder: FormBuilder,
    private paintingsService: PaintingsService) {

    this.datos = this.formBuilder.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      emailConfirmed: ['', Validators.required ],
      message: ['', Validators.required ],
    });

  }

  ngOnInit(): void {
  }

  notPaste() {
    this.hasCopied = true;
    return false;
  }

  sendMessage(formValue: any) {


    this.paintingsService.sendMail(formValue).subscribe(
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
