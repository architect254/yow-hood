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
  ApplicationRef,
  Component,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  afterNextRender,
  afterRender,
} from '@angular/core';
import {
  Subscription,
  first,
  interval,
  switchMap,
  takeUntil,
  tap,
  timer,
} from 'rxjs';

@Component({
  selector: 'logo',
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
              style({
                strokeDashoffset: 0,
                stroke: '#00458f',
                fill: 'none',
                offset: 0,
              }),
              style({ strokeDashoffset: 2000, offset: 0.5 }),
              style({ strokeDashoffset: 0, offset: 0.8 }),
              style({
                strokeDashoffset: 2000,
                stroke: '#00458f',
                fill: '#0074e9',
                offset: 1,
              }),
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
  $subscription$: Subscription = new Subscription();

  constructor(appRef: ApplicationRef, zone: NgZone) {
    const currentDate = new Date();
    const startOfNextMinute = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      currentDate.getHours(),
      currentDate.getMinutes() + 1
    );

    this.$subscription$.add(
      appRef.isStable
        .pipe(
          first((stable) => stable),
          tap((stable) => console.log('App is stable now')),
          switchMap(() =>
            interval(1500).pipe(takeUntil(timer(startOfNextMinute)))
          )
        )
        .subscribe((t) =>
          zone.run(() => {
            this.animationCompleted = !this.animationCompleted;
          })
        )
    );
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.$subscription$.unsubscribe();
  }
}
