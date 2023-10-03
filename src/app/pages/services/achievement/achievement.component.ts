import { Component, Input } from '@angular/core';
import { Achievement } from 'src/app/models/serviceAchievement';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css'],
  standalone: true,

})
export class AchievementComponent {
  @Input('item') item!:Achievement
}
