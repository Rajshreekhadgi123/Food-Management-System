import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  // registration CRUD

  name = "";
  email = "";
  password = "";
  contact = "";

  // constructor()
  // {
  //   this.register = JSON.parse(localStorage.getItem('register_data') || '');
  //   console.log(this.register);
  // }

  register : any =[];

  submitregister()
  {
    let object = {
      name : this.name,
      email : this.email,
      password  :this.password ,
      contact:this.contact
    }

    this.register.push(object);
    this.clear();
    console.log("Registration Info :" , this.register)

    // localstorage
    // localStorage.setItem('register_data',JSON.stringify(this.register))
  }

  clear()
  {
    this.name = "";
    this.email = "";
    this.password = "";
    this.contact = "";
  }
}
