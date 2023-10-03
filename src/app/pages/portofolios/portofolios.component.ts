import { Component } from '@angular/core';
import { WhyChooseUsComponent } from '../why-choose-us/why-choose-us.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portofolios',
  templateUrl: './portofolios.component.html',
  styleUrls: ['./portofolios.component.css'],
  standalone: true,
  imports:[WhyChooseUsComponent,RouterModule]
})
export class PortofoliosComponent {

}
