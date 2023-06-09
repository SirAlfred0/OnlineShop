import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[slide]'
})
export class SlideDirective implements OnInit {

  @Input('data') public data: any;

  constructor(
    public elRef: ElementRef
    ) { }

  ngOnInit(): void {
  }
}
