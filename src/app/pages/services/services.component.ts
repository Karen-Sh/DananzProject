import { Component } from '@angular/core';
import { PtoductComponent } from '../home/ptoduct/ptoduct.component';
import { AchievementComponent } from './achievement/achievement.component';
import { NgForOf } from '@angular/common';
import { Achievement } from 'src/app/models/serviceAchievement';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone: true,
  imports: [PtoductComponent,AchievementComponent,NgForOf]
})
export class ServicesComponent {
   achiev:Achievement[]=[
    {
      id:1,
      img: 'assets/img/unsplash_mx4mSkK9zeo.png',
      title: 'Interior design',
      text: `Customize your interior design into a
             dream place with the best designers and
             quality furniture. We try our best to
             fulfill your expectations.`
    },
    {
      id:2,
      img: 'assets/img/unsplash_7okkFhxrxNw.png',
      title: 'Consultant',
      text: `Customize your interior design into a
             dream place with the best designers and
             quality furniture. We try our best to
             fulfill your expectations.`
    },
    {
      id:3,
      img: 'assets/img/unsplash_wD1LRb9OeEo.png',
      title: ' construction consultant',
      text: `Customize your interior design into a
             dream place with the best designers and
             quality furniture. We try our best to
             fulfill your expectations.`
    }
   ]
}
