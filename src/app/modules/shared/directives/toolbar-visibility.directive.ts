import { Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appToolbarVisibility]'
})
export class ToolbarVisibilityDirective implements OnInit {

  constructor(
    private elRef: ElementRef, 
    private renderer: Renderer2)
  {}

  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'opacity', window.scrollY / 6 + '%');
    

    if(window.scrollY >= 400)
    {
      this.renderer.setStyle(this.elRef.nativeElement, 'pointer-events', 'all');
    }else{
      this.renderer.setStyle(this.elRef.nativeElement, 'pointer-events', 'none');
    }
  }


  @HostListener('window:scroll') onScroll() {
    this.renderer.setStyle(this.elRef.nativeElement, 'opacity', window.scrollY / 6 + '%');

    if(window.scrollY >= 400)
    {
      this.renderer.setStyle(this.elRef.nativeElement, 'pointer-events', 'all');
    }else{
      this.renderer.setStyle(this.elRef.nativeElement, 'pointer-events', 'none');
    }
  }

}
