import { trigger, state, animate, transition, style } from '@angular/animations';

export const flyInOutLeft = trigger('flyInOutLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('1s ease-out', style({ transform: 'translateX(-100%)' }))
      ])] )

export const flyInOutEvent =  trigger('flyInOut', [
    state('show', style({ transform: 'translateX(0%)' })),
    state('hide', style({ transform: 'translateX(-100%)' })),
    transition('hide => show', //style()
    animate('600ms ease-in')), 
    transition('show => hide', animate('600ms ease-out'))
  ])