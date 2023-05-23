import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {
  }

  email = "";
  password = "";



  Logindata : any=[];

  submitlogin()
  {
    let object = {
      email : this.email,
      password : this.password
    }
    
    this.alertlogin();
    this.Logindata.push(object);
    console.log("Login Info :" , this.Logindata)
    this.clear();
   
    
  }


  clear()
  {
    this.email = "";
    this.password = "";
  }

  alertlogin()
  {
    if(this.email == "" && this.password !="" )
    {
      alert("Please enter your email..!");
    }
    else if(this.password == "" && this.email != "" ){
      alert("Please enter your Password..!")
    }
    else if(this.password == "" && this.email ==""){
      alert("Please enter your email and Password..!")
    }
    else
    {
      alert("Login Successfully..!!")
      this.router.navigateByUrl('home');
    }
  }

  
}
