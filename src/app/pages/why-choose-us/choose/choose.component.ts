import { Component, Input } from '@angular/core';
import { Choose } from 'src/app/models/choose';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css'],
  standalone: true
})
export class ChooseComponent {
  @Input('items') choose!:Choose
}
