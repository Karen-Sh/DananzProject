import { Component } from '@angular/core';
import { WhyChooseUsComponent } from '../why-choose-us/why-choose-us.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  standalone: true,
  imports: [WhyChooseUsComponent]
})
export class AboutUsComponent {

}
