import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/creativ-list';
import { CreativePersonComponent } from '../creative-person/creative-person.component';
import { WhyChooseUsComponent } from '../why-choose-us/why-choose-us.component';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GataService } from 'src/app/service/gata.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-our-teams',
  templateUrl: './our-teams.component.html',
  styleUrls: ['./our-teams.component.css'],
  standalone: true,
  imports: [CreativePersonComponent,WhyChooseUsComponent,NgFor,RouterModule]
})
export class OurTeamsComponent  implements OnInit{
    person:Person[]=[]
    
    constructor(private service: GataService){}

    ngOnInit(): void {
       this.service.PersonGet<Person[]>(environment.person.get).subscribe(data=>{
          this.person =data
       })
    }

  }
