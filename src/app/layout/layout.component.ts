import { Component } from '@angular/core';
import { FooterComponent } from '../headet-footer/footer/footer.component';
import { HeaderComponent } from '../headet-footer/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports: [FooterComponent,HeaderComponent,RouterModule]
})
export class LayoutComponent {

}
