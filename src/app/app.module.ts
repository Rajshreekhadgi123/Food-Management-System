import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OrdernowComponent } from './ordernow/ordernow.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { FoodComponent } from './menu/food/food.component';
import { DrinkComponent } from './menu/drink/drink.component';
import { CartComponent } from './cart/cart.component';
import { CounterService } from './counter.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    FoodComponent,
    RegisterComponent,
    AboutusComponent,
    OrdernowComponent,
    HeaderComponent,
    FooterComponent,
    DrinkComponent,
    CartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    Ng2SearchPipeModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
