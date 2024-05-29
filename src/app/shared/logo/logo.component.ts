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
          '.logo-main',
          animate(
            '1000ms linear',
            keyframes([
              style({ strokeDashoffset: 0, offset: 0 }),
              style({ strokeDashoffset: 1560, offset: 0.5 }),
              style({ strokeDashoffset: 3120, offset: 0.8 }),
              style({ strokeDashoffset: 0, offset: 1 }),
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
  ngOnInit(): void {
    this.subscription$.add(
      interval(100).subscribe(() => {
        this.animationCompleted = !this.animationCompleted;
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
