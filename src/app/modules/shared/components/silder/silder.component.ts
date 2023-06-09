import { transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, EventEmitter, Input, Output, QueryList, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { left, right } from 'src/app/animations/animations';
import { SlideDirective } from '../../directives/slide.directive';

@Component({
  selector: 'silder-controller',
  templateUrl: './silder.component.html',
  styleUrls: ['./silder.component.css'],
  animations: [
    trigger('animFade', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ]
})
export class SilderComponent implements AfterViewInit{

  @ContentChildren(SlideDirective, {read: SlideDirective}) private sildeQueryList: QueryList<SlideDirective> = new QueryList<SlideDirective>();


  @Input('Mode') mode: 'circle'|'line' = 'circle';
  @Input('Interval') intervalPeriod: number = 3000;
  @Input('Count') itemPerSlide: number = 1;

  @Output('onSelect') onSelectEvent: EventEmitter<any> = new EventEmitter<any>();


  slides = signal<any>([]);
  currentSlide: number = 0;
  clickCounter: number = 0;

  private interval: any;



  constructor(
    private changeDetector: ChangeDetectorRef,
    private domSanitizer: DomSanitizer
    )
  {}

  ngAfterViewInit(): void {
    this.slides.set(this.slideList);

    if(this.mode == 'circle' && this.slides().length > 1)
    {
      this.interval = setInterval(() => this.onNext(), this.intervalPeriod);
    }
    this.changeDetector.detectChanges();
  }

  private get slideList()
  {
    const slideList = this.sildeQueryList.toArray();
    let result: any[] = [];
    let arr: any[] = [];

    slideList.forEach((slide: SlideDirective, index: number) => {
      arr.push(slide);

      if(arr.length === this.itemPerSlide || index === slideList.length - 1)
      {
        result.push(arr);
        arr = [];
      }
    });

    return result;
  }

  sanitize(value: string)
  {
    return this.domSanitizer.bypassSecurityTrustHtml(value);
  }

  onNext()
  {
    this.clickCounter++;
    if(this.currentSlide == this.slides().length - 1 && this.mode == 'line')
    {
      return;
    }
    this.currentSlide = (this.currentSlide + 1) % this.slides().length;
  }

  onPrevious()
  {
    this.clickCounter--;
    if(this.currentSlide == 0 && this.mode == 'line')
    {
      return;
    }
    this.currentSlide = (this.currentSlide + this.slides().length - 1) % this.slides().length;
  }

  onSlideClick(item: SlideDirective)
  {
    this.onSelectEvent.emit(item.data);
  }

  get isNextValid()
  {
    if(this.mode == 'circle') return this.slides().length > 1;
    else if(this.currentSlide == this.slides().length - 1) return false;

    return true;
  }

  get isPreviousValid()
  {
    if(this.mode == 'circle') return this.slides().length > 1;
    else if(this.currentSlide == 0) return false;

    return true;
  }
}
