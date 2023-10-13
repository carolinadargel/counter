import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CounterService } from '../counter/counter.service';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

	@Input() label: any;

	// @Output() operateCounter : EventEmitter<any> = new EventEmitter();

	sendEventToCounter(operation: any) {
		this.counterService.getAction(operation);
		console.log('button function', this.label);
	}

	constructor(private counterService: CounterService) {

	}

}
