import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  stagger,
  query,
} from '@angular/animations';
import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  afterNextRender,
  afterRender,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'yh-logo',
  standalone: true,
  animations: [
    trigger('animationCompleted', [
      transition(
        ':enter',
        query(
          '.logo-main,.logo-separator',
          animate(
            '1000ms linear',
            keyframes([
              style({ strokeDashoffset: 0,stroke:'#00458f', fill: 'none', offset: 0 }),
              style({ strokeDashoffset: 2000, offset: 0.5 }),
              style({ strokeDashoffset: 0, offset: 0.8 }),
              style({ strokeDashoffset: 2000, stroke: '#00458f',fill:'#0074e9', offset: 1 }),
            ])
          )
        )
      ),
    ]),
  ],
  templateUrl: './logo.component.svg',
  styleUrl: './logo.component.scss',
})
export class LogoComponent implements OnInit, OnDestroy {
  @Input() size = 200;
  @Input() animating = false;

  animationCompleted = false;
  subscription$: Subscription = new Subscription();

  constructor() {}
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
