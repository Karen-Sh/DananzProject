import { Component } from '@angular/core';
import { Choose } from 'src/app/models/choose';
import { ChooseComponent } from './choose/choose.component';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css'],
  standalone: true,
  imports:[ChooseComponent,NgForOf]
})
export class WhyChooseUsComponent {
    choose:Choose[] = [
      {
        id:1,
        title:'High Quality',
        text: `Customize your interior design into 
               a dream place with the best designers 
               and quality furniture. We try our best 
               to fulfill your expectations.`
      },
      {
        id:2,
        title:'Professional Designer',
        text: `Customize your interior design into 
               a dream place with the best designers 
               and quality furniture. We try our best 
               to fulfill your expectations.`
      },
      {
        id:3,
        title:'The Best Services',
        text: `Customize your interior design into 
               a dream place with the best designers 
               and quality furniture. We try our best 
               to fulfill your expectations.`
      }
    ]
}
