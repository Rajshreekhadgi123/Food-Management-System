import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FoodComponent } from './menu/food/food.component';
import { DrinkComponent } from './menu/drink/drink.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:"" , component:RegisterComponent , pathMatch:"full",
  },
  {
    path:"login" , component:LoginComponent,
  },
  {
    path:"home" , component:HomeComponent ,
  },
  {
    path:"aboutus" , component:AboutusComponent,
  },
  {
    path:"menu" , component:MenuComponent,
  },
  {
    path:"cart" , component:CartComponent,
  },
  {
    path:"menu/food" , component:FoodComponent,
  },
  {
    path:"menu/drink" , component:DrinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
