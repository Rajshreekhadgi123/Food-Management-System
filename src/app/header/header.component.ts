import { Component } from '@angular/core';
import { CounterService } from '../counter.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

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

showlogoutalert()
{
  alert("Logout Successfully")
}

}



