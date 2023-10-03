import { Component } from '@angular/core';
import { PtoductComponent } from './ptoduct/ptoduct.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports:[PtoductComponent,RouterModule]
})
export class HomeComponent {

}
