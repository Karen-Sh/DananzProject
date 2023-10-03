import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  standalone: true,
  imports:[ReactiveFormsModule,NgIf]
})
export class ContactUsComponent {
  form: FormGroup = this.fb.group({
    f_name:   ['', [Validators.required, Validators.minLength(3)]],
    l_name:   ['', [Validators.required, Validators.minLength(3)]],
    e_mail:   ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    p_number: ['', [Validators.pattern(/^\+374[0-9]{2}[0-9]{6}$/)]],
    text:     ['', [Validators.required, Validators.minLength(3)]],
  })
  constructor(public fb:FormBuilder){

  }
  save(){
    this.form.reset();
  }
}
