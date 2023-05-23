import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


name = "";
price = "";
quantity : any ;
image : any;
// holdindex:any;
// holdobj:any;

ourFood: any = [
    { name:'Rainbow Vegetable Sandwitch' , price:250 , image :'assets/one.jpg'},
]

ourdrink :any = [
  { name: 'strawberry drink' , price :200 , image : 'assets/d2.jpeg'}
]



foodmodal ()
{
  let obj = {
    name:this.name,
    price:this.price,
    quantity : this.quantity,
    image : this.image
  }
  this.ourFood.push(obj);
  this.clear();
}

drinkmodal ()
{
  let obj = {
    name:this.name,
    price:this.price,
    quantity : this.quantity,
    image : this.image
  }
  this.ourdrink.push(obj);
  this.clear();
}

clear()
{
  this.name = "";
  this.price = "";
  this.quantity = "";
  this.image = ""
}

onselectFile(e:any)
{
  if(e.target.files)
  {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event:any)=>{
      this.image = event.target.result;
    }
  }
}

// updatafood()
// {
//   this.ourFood[this.holdindex].name = this.name,
//   this.ourFood[this.holdindex].price = this.price,
//   this.ourFood[this.holdindex].quantity = this.quantity,
//   this.ourFood[this.holdindex].image = this.image
// }

// addfooditem(i : any)
// {
//   this.addfood.push(this.ourFood[i]);
//   console.log("Food added successfully..!")
// }

// adddrinkitem(i:any)
// {
//   this.adddrink.push(this.ourdrink[i]);
//   console.log("Drink added successfully..!")
// }
}
