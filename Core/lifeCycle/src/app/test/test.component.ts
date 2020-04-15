import { Component, OnInit, OnChanges, Input, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() p: number
  
  @ViewChild('parag') parag // get labeled data from the html of the component
  @ContentChild("myData") myData // passed with ng-content (when call component (when include))

  number = 100

  constructor() {
    console.log("constructor")
  }

  ngOnInit() {
    console.log("OnInit")
  }

  ngOnChanges(changes) { // changes param contain the value passed in the Input
    console.log("OnChanges")
    console.log(changes)
  }

  ngDoCheck() { // check for any changes in the html & events also because it may change the content!, when promise, subscribe, ...
    console.log("DoCheck")
  }

  ngAfterContentInit() { // exe after ng-content (Input, Output data)
    console.log("AfterContentInit")
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked')
  }

  ngAfterViewInit() { // after view all element of UI (included ng-content)
    console.log('AfterViewInit')
    console.log(this.parag)
    console.log(this.myData)
  }
  
  ngAfterViewChecked() { // exe after content
    console.log('AfterViewChecked')
  }
  
  ngOnDestroy() {
    console.log('OnDestroy')
  }

}
