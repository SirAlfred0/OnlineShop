import { animate, group, query, style, transition, trigger } from "@angular/animations";

export const left = [
    group([
      query(':enter', [style({ transform: 'translateX(-100%)',  position: 'absolute' }), animate('.5s ease-out', style({ transform: 'translateX(0%)' }))], {
        optional: true,
      }),
      query(':leave', [style({ transform: 'translateX(0%)' , display: 'none' }), animate('.5s ease-out', style({ transform: 'translateX(100%)' }))], {
        optional: true,
      }),
    ]),
  ];
  
export const right = [
    group([
      query(':enter', [style({ transform: 'translateX(100%)', position: 'absolute'}), animate('.5s ease-out', style({ transform: 'translateX(0%)' }))], {
        optional: true,
      }),
      query(':leave', [style({ transform: 'translateX(0%)'}), animate('.5s ease-out', style({ transform: 'translateX(-100%)' }))], {
        optional: true,
      }),
    ]),
  ];


  //    query(':enter, :leave', style({ position: 'absolute'}), { optional: true }),