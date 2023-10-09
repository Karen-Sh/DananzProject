import { Component, OnInit } from '@angular/core';
import { Choose } from 'src/app/models/choose';
import { ChooseComponent } from './choose/choose.component';
import { NgFor, NgForOf } from '@angular/common';
import { GataService } from 'src/app/service/gata.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css'],
  standalone: true,
  imports:[ChooseComponent,NgForOf]
})
export class WhyChooseUsComponent implements OnInit {
    choose:Choose[] = []
    constructor(private service: GataService){

    }
  ngOnInit(): void {
    this.service.ChooseGet<Choose[]>(environment.choose.get).subscribe(data=>{
      this.choose =data
    })
  }

}
