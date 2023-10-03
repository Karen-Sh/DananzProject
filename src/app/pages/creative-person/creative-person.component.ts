import { Component, Input } from '@angular/core';
import { Person } from 'src/app/models/creativ-list';

@Component({
  selector: 'app-creative-person',
  templateUrl: './creative-person.component.html',
  styleUrls: ['./creative-person.component.css'],
  standalone: true,
  imports:[]
})
export class CreativePersonComponent {
    @Input('person') person!:Person
}
