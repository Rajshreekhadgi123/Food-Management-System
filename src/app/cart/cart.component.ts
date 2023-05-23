import { Component } from '@angular/core';
import { CounterService } from '../counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  clickEventSubscription:Subscription;

constructor(private counterservice:CounterService){
  this.clickEventSubscription = this.counterservice.getClickEvent().subscribe(()=>{
    this.increment();
  })
}

counte = 0
increment()
{
this.counte++;
}

ourFoodcart: any = [
  { sno : 0 , name:'Rainbow Vegetable Sandwitch', quantity:2 , price:250 , image :'../../../assets/one.jpg'},
  { sno : 1 , name:'overloaded Burger', quantity:1 , price:270 , image :'../../../assets/two.jpeg'},
  { sno : 2 , name:'Veg Noodles', quantity:2 ,  price:180 , image :'../../../assets/three1.jpg'},
  {name : "Dirty Shirley Drink", quantity: 2 , price:350 , image:"../../../assets/d4.jpeg" },
  {name : "Transfusion Cocktail", quantity: 2 , price:350 , image:"../../../assets/d5.jpeg" },
  {name : "Pom Drink", quantity: 2 , price:350 , image:"../../../assets/images.jpeg" },
  
]

deleteitem(index:any)
{
  this.ourFoodcart.splice(index , 1)
}


//  sum = 0;
     
// // Running the for loop
// for (let i = 0; i < this.ourFoodcart.length; i++) {
//     this.sum += this.ourFoodcart.price[i];
// }



}
