import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinkComponent } from './link/link.component';
import { Links } from 'src/app/models/links';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-ptoduct',
  templateUrl: './ptoduct.component.html',
  styleUrls: ['./ptoduct.component.css'],
  standalone: true,
  imports:[RouterModule,LinkComponent,NgForOf]
})
export class PtoductComponent {
  link:Links[]=[
    {
      id:1,
      text1:'01',
      text2: 'Vintage',
      img: 'assets/img/arrow-right (3).png',
      text3: `the use of simple and limited 
              elements to get the best effect
              or impression.`
    },
    {
      id:2,
      text1:'02',
      text2: 'Minimalist',
      img: 'assets/img/arrow-right (3).png',
      text3: `the use of simple and limited 
              elements to get the best effect
              or impression.`
    },
    {
      id:3,
      text1:'03',
      text2: 'Modern',
      img: 'assets/img/arrow-right (3).png',
      text3: `the use of simple and limited 
              elements to get the best effect
              or impression.`
    },
    {
      id:4,
      text1:'04',
      text2: 'transitional',
      img: 'assets/img/arrow-right (3).png',
      text3: `the use of simple and limited 
              elements to get the best effect
              or impression.`
    }
  ]
}
