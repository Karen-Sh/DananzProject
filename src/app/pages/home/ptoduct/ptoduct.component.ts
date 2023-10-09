import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinkComponent } from './link/link.component';
import { Links } from 'src/app/models/links';
import { NgForOf } from '@angular/common';
import { GataService } from 'src/app/service/gata.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-ptoduct',
  templateUrl: './ptoduct.component.html',
  styleUrls: ['./ptoduct.component.css'],
  standalone: true,
  imports:[RouterModule,LinkComponent,NgForOf]
})
export class PtoductComponent implements OnInit {
  link:Links[]=[]
  constructor (private service:GataService){}
  ngOnInit(): void {
    this.service.LinkGet<Links[]>(environment.link.get).subscribe(data=>{
        this.link =data;
    })
  }
}
