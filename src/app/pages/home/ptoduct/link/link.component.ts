import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Links } from 'src/app/models/links';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
  standalone: true,
  imports:[RouterModule]
})
export class LinkComponent {
@Input('link') links!:Links
}
