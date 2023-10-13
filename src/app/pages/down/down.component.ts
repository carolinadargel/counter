import { Component } from '@angular/core';
import { CounterService } from '../../counter/counter.service';

@Component({
  selector: 'app-down',
  templateUrl: './down.component.html',
  styleUrls: ['./down.component.scss']
})
export class DownComponent {

  constructor(private counterService: CounterService) {
    this.counterService.variables.action = 'down';
  }

}
