import { Component } from '@angular/core';
import { PtoductComponent } from '../home/ptoduct/ptoduct.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone: true,
  imports: [PtoductComponent]
})
export class ServicesComponent {

}
