import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appCopy]'
})
export class CopyDirective implements OnInit {

  @Input('appCopy') n

  constructor(private tempRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }
  
  ngOnInit(): void {
    for(let i = 0; i < this.n; i++)
      this.viewContainerRef.createEmbeddedView(this.tempRef)
  }

}
