import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactFormGroup!:FormGroup

  constructor(private fb:FormBuilder,
              ) { }

  ngOnInit(): void {
    this.contactFormGroup=this.fb.group({
      name:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      email:this.fb.control(null,[Validators.required,Validators.minLength(8)]),
      subject:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      message:this.fb.control(null,[Validators.required,Validators.minLength(20)]),
    })
  }

  handleSendMessage(){
    this.contactFormGroup.reset()
  }

  errorContact(name:string,error:ValidationErrors):any{

    if(error['required'])
      return name +" is Required"

    else if(error['minlength'])
      return name+" should have at last "+error['minlength']["requiredLength"]+" Characters"

    else if(error['min'])
      return name+" should have min value "+error['min']["min"]

    else
      return undefined
  }
}
