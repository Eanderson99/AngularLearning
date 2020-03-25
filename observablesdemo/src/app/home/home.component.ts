import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  
  

  myObs: Observable<Array<number>> = Observable.create((observer: Observer<Array<number>>) => {
    let arr: Array<number> = [];

    setInterval(() => {
      arr.push(arr.length)
      observer.next(arr) // send data to observer  
    }, 1000)

    /*setTimeout(() => {
      observer.error('error') // send error to observer
    }, 4000)
    
    setTimeout(() => {
      observer.complete() // done
    }, 6000)*/
  });

  mySub: Subscription
  myArr: Array<number>
  ngOnInit() {
    /*this.mySub = this.myObs.subscribe((data) => { // for data
      console.log(data)
    }, (error) => { // for errors
      console.log(error)
    }, () => { // for complet
      console.log('done!')
    })*/

    this.mySub = this.myObs.subscribe(arr => {this.myArr = arr})
  }

  ngOnDestroy() { // stop execution of observables when i change the page
    this.mySub.unsubscribe()
  }
}
