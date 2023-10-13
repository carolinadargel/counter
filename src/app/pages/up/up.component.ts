import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CounterService } from '../../counter/counter.service';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.scss']
})
export class UpComponent {

  // event = false

  // parentData(data:any) {
  //   this.event = true
  // }
  constructor(private counterService: CounterService) {
    this.counterService.variables.action = 'up';
  }

}
