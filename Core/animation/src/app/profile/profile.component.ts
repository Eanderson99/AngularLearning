import { Component } from '@angular/core';
import { trigger, transition, style, animate, group, keyframes, query, state } from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({opacity: 0, transform: 'translateX(100px)'}), // start animation style
        group([ // exe multiple animation at the same time
          animate(1000, style({opacity: 1})), // end animation style
          animate(500, style({transform: 'translateX(0)'})) // end animation style
        ]),
        animate(1000, keyframes([
          style({opacity: 0.4, offset: 0.5}), // offset: presentage of making animation time
          style({opacity: 1, offset: 1})
        ]))
      ])
    ]),
    trigger('fadeDiv', [
      transition('void => *', [
        style({transform: 'translateX(100px)'}),
        group([
          animate(1000, style({transform: 'translateX(0)'})),
          query('span', [
            style({opacity: 0}),
            animate(500, style({opacity: 1}))
          ])
        ])
      ])
    ]),
    trigger('customAnim', [ // custom animation
        state('s1', style({backgroundColor: '#f00'})),
        state('s2', style({backgroundColor: '#00f'})),
        transition('s1 => s2', animate(1000))
    ])
  ]
})
export class ProfileComponent {

  courses = ['Angular', 'Vue', 'React']

  state = 's1' // for custom animation

  constructor() { }

  changeMe() {
      this.state = 's2'
  }

  start() {
    console.log('animation start!')
  }

  done() {
    console.log('animation end!')
  }
}
