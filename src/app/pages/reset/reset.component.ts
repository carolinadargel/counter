import { CounterComponent } from './../../counter/counter.component';
import { Component } from '@angular/core';
import { CounterService } from '../../counter/counter.service';

@Component({
    selector: 'app-reset',
    templateUrl: './reset.component.html',
    styleUrls: ['./reset.component.scss']
})
export class ResetComponent {

  birthDate: any;
  age: any

  onClick(event: any) {
    this.birthDate = document.querySelector('input[type="date"]');
    this.age = this.calculateAge()
    this.counterService.variables.userAge = this.age
    this.counterService.getAction('Verify birth date')
    }

    calculateAge() {

        let birthDateParts

        // verificar se existe, se não, returna 0
        if (this.birthDate) birthDateParts = this.birthDate.value.split('-')
        else return 0
        if (birthDateParts.length === 1) return 0


      let currentDate = new Date();
      let currentYear: any = currentDate.getFullYear();
      let birthDay = birthDateParts[2];
      let birthMonth = birthDateParts[1];
      let birthYear = birthDateParts[0];
      let age = currentYear - birthYear;

      if (!currentYear) return null

        let currentMonth: any = currentDate.getMonth() + 1;

        //if current month is lower than birth month, user didn't
        //have birthday in the current year yet
        if (currentMonth < birthMonth) {
            age--;
        } else {
            //if current month is same as birth month, verify day
            if (currentMonth == birthMonth) {
                if (new Date().getDate() < birthDay) {
                    //If current date is lower than birth birth day, user didn't
                    //have birthday in the current year yet
                    age--;
                }
            }
        }

        return age;
    }

    constructor(private counterService: CounterService) {
        this.counterService.variables.action = 'Verify birth date'
    }
}
