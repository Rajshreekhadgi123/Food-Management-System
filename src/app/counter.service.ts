import { Injectable } from '@angular/core';
import { Observable , Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private subject = new Subject<any>();

  sendClickEvent(){
    this.subject.next(true);
  }

  getClickEvent():Observable<any>{
    return this.subject.asObservable();
  }
}
