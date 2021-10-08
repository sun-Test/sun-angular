import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { flyInOutEvent, flyInOutLeft } from './animations/anime-collection-01';
import { NaviTreeComponent } from './components/navi-tree/navi-tree.component';
import { WsServiceService } from './ws-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [flyInOutLeft, flyInOutEvent]
/*    trigger('fadeIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('600ms ease-out', style({ transform: 'translateX(-100%)' }))

      ])] ),

  trigger('flyInOut', [
    state('show', style({ transform: 'translateX(0%)' })),
    state('hide', style({ transform: 'translateX(-100%)' })),
    transition('hide => show', //style()
    animate('600ms ease-in')), 
    transition('show => hide', animate('600ms ease-out'))
  ])

  ] */
}) 
export class AppComponent implements OnInit{
  title = 'sun-ws-angu-client';
  @ViewChild(NaviTreeComponent) 
  public naviTree!: NaviTreeComponent;
  public isNaviTreeOpen = false;

  //inject dependence
  constructor() { 
  }

  ngOnInit() {
  }
}
