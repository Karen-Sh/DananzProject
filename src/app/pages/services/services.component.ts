import { Component, OnInit } from '@angular/core';
import { PtoductComponent } from '../home/ptoduct/ptoduct.component';
import { AchievementComponent } from './achievement/achievement.component';
import { NgForOf } from '@angular/common';
import { Achievement } from 'src/app/models/serviceAchievement';
import { GataService } from 'src/app/service/gata.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone: true,
  imports: [PtoductComponent,AchievementComponent,NgForOf]
})
export class ServicesComponent implements OnInit {
  achievement:Achievement[]=[]
   constructor( private service: GataService){}
  ngOnInit(): void {
    this.service.AchievementGet<Achievement[]>(environment.achievement.get).subscribe(data=>{
      this.achievement = data
    })
  }


}
