import { CounterService } from './counter.service';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent {

  @Input() age: any;

  // count = this.counterService.variables.count;
  // action = this.counterService.variables.action;
  // background = this.counterService.variables.background;


  updateCount(){
    // console.log(this.count)
    // this.count = (this.age >= 18) ? this.count = 0 :
    // this.counterService.variables.count;
    // this.background = this.counterService.variables.background;
  }


  countChange:any = new Observable(this.replaceCount);

  replaceCount (observer:any) {
    console.log('Aqui começa o Observable');

    let watchCount: number;

    // Simple geolocation API check provides values to publish
    if ('count' in navigator) {
      watchCount = navigator.geolocation.watchPosition((position: GeolocationPosition) => {
      observer.next(position);
    }, (error: GeolocationPositionError) => {
      observer.error(error);
    });
  } else {
    observer.error('Geolocation not available');
  }

  // When the consumer unsubscribes, clean up data ready for next subscription.
  return {
    unsubscribe() {
      navigator.geolocation.clearWatch(watchId);
    }
  };
});

  }

  ngOnInit() {
    this.background = this.counterService.variables.background;
    this.count = this.counterService.variables.count;
  }

  constructor(
    private counterService: CounterService) {
  }
}
