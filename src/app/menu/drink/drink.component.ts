import { Component } from '@angular/core';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent {

  ourDrink :any=[
    {name : "Greyhound Drink", quantity: 2 , price:350 , image:"assets/d1.jpeg" },
    {name : "Mocktail", quantity: 2 , price:3500 , image:"assets/d2.jpeg" },
    {name : "Cold Drink", quantity: 2 , price:350 , image:"assets/d3.jpeg" },
    {name : "Dirty Shirley Drink", quantity: 2 , price:350 , image:"assets/d4.jpeg" },
    {name : "Transfusion Cocktail", quantity: 2 , price:350 , image:"assets/d5.jpeg" },
    {name : "Pom Drink", quantity: 2 , price:350 , image:"assets/images.jpeg" },
  ]

  drinkadd : any = []

  searchdrink : any;

drinkItem(i:any)
{
  this.drinkadd.push(this.ourDrink[i]);
  console.log("Drink Added..!")
}

deleteitem(index:any)
{
  this.drinkadd.splice(index , 1)
}


}
