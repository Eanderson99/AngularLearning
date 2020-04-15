import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appGreen]'
})
export class GreenDirective implements OnInit {

  @Input() set color(value: string) {
    // recommanded
    this.render.setStyle(this.elRef.nativeElement, 'background-color', value);
  };

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    // work only in browser (not recommanded)
    this.elRef.nativeElement.style.color = "white"
  }

}
