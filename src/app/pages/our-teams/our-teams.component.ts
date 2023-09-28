import { Component } from '@angular/core';
import { Person } from 'src/app/models/creativ-list';

@Component({
  selector: 'app-our-teams',
  templateUrl: './our-teams.component.html',
  styleUrls: ['./our-teams.component.css']
})
export class OurTeamsComponent {
    person:Person[]=[
      {
        id: 1,
        img:'assets/img/unsplash_YmQ8TrsieE4.png',
        title: 'Shoo Phar Dhie',
        text: 'CEO'
      },
      {
        id: 2,
        img:'assets/img/unsplash_WyDr1KFS23Y.png',
        title: 'Shoo Phar Dhie',
        text: 'CEO'
      },
      {
        id: 3,
        img:'assets/img/unsplash_W7b3eDUb_2I.png',
        title: 'Shoo Phar Dhie',
        text: 'CEO'
      },
      {
        id: 4,
        img:'assets/img/unsplash_chn-__w4I3M.png',
        title: 'Shoo Phar Dhie',
        text: 'CEO'
      },
      {
        id: 5,
        img:'assets/img/unsplash_IF9TK5Uy-KI.png',
        title: 'Shoo Phar Dhie',
        text: 'CEO'
      },
      {
        id: 6,
        img:'assets/img/unsplash_5n3JP9WAJTs.png',
        title: 'Shoo Phar Dhie',
        text: 'CEO'
      },
      {
        id: 7,
        img:'assets/img/unsplash_Zz5LQe-VSMY.png',
        title: 'Shoo Phar Dhie',
        text: 'CEO'
      },
      {
        id: 8,
        img:'assets/img/unsplash_GRyMXAQdtp8.png',
        title: 'Shoo Phar Dhie',
        text: 'CEO'
      },
    ]
  }
