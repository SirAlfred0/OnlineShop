import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFloatingElement]'
})
export class FloatingElementDirective {

  @Input('Float') float: number = 0; 


  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('window:scroll') onScroll() {
    if(window.scrollY >= this.float)
    {
      this.renderer.setStyle(this.elRef.nativeElement, 'margin-top', (window.scrollY) - this.float + 'px')
    }else{
      this.renderer.setStyle(this.elRef.nativeElement, 'margin-top', '0' + 'px')
    }
  }

}
