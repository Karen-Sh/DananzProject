import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  form:FormGroup= new FormGroup({
    f_name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    l_name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    e_mail: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    p_number: new FormControl('' ,Validators.pattern("^+374[0-9]{2}[0-9]{6}$")),
    text: new FormControl('',[Validators.required,Validators.minLength(3)]),
  })
}
