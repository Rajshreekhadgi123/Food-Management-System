import { Component } from '@angular/core';
import { CounterService } from 'src/app/counter.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent {

  counter = 0;
  
  // constructor(private counterservice:CounterService){}


  // count(){
  //   this.counterservice.sendClickEvent();
  // }

  searchfood : any;


ourFood: any = [
    { sno : 0 , name:'Rainbow Vegetable Sandwitch', price:250 , image :'assets/one.jpg'},
    { sno : 1 , name:'overloaded Burger' , price:270 , image :'assets/two.jpeg'},
    { sno : 2 , name:'Veg Noodles' ,  price:180 , image :'assets/three1.jpg'},
    { sno : 3 , name:'Vegeterian Burger' ,  price:200 , image :'assets/four.jpg'},
    { sno : 4 , name:'Cheese Pizza' ,  price:299 , image :'assets/six1.jpg'},
    { sno : 5 , name:'Paneer Tikka' ,  price:160 , image :'assets/eight.jpeg'},
    
]

cardadd:any=[];

fooditems(i:any)
{
 
  this.increment(i);
  this.cardadd.push(this.ourFood[i])
  console.log("Fruit details")
}

deleteitem(index:any)
{
  this.cardadd.splice(index , 1)
}
  
increment(i:any) {
  
  this.counter++;
  return 0;
}



}
