import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()

export class CounterService {

     // Observable string sources
     private count = new Subject<number>();

     variables: any = {
          count: this.checkLocalStorage(),
          clickCount: 0,
          multiplier: 1,
          action: '',
          userAge: 0,
          background: '',
     }

     ngOnInit() { };

     //main function, receive action and call functions accordingly
     getAction(action: any) {

          // console.log(this.variables.count)

          let count = this.variables.count

          this.variables.action = action;
          this.countUpdate()
          this.clickCounterUpdate()

          //verifies if number of clicks are bigger than 30 AND multiple of 30
          if (this.variables.clickCount >= 30
               && this.variables.clickCount % 30 == 0) this.updateMultiplier()

          if (count >= 10 || count <= -10) this.backgroundUpdate()

          // console.log(this.variables.count)

     }

     //update number that count is being multiplied in each click
     //the value should be multiplied by in every 30 clicks
     updateMultiplier() {

          let clickCount = this.variables.clickCount
          let newMultiplier = ((clickCount / 30) * 2).toFixed(0)

          this.variables.multiplier = parseInt(newMultiplier)
     }

     //verify action type and increases, decreases or reset counter
     countUpdate() {


          // console.log(this.variables.count)

          let countUpdate
          let action = this.variables.action
          let age = this.variables.userAge
          let count = this.variables.count
          let multiplier = this.variables.multiplier

          if (action === 'up') countUpdate = count + multiplier
          if (action === 'down') countUpdate = count - multiplier;

          if (action === 'Verify birth date') {
               if (this.legalAge()) {
                    countUpdate = 0
                    this.variables.userAge = 0
               }
               else countUpdate = count
          }

          this.variables.count = countUpdate
          this.updateLocalStorage(countUpdate)

          // console.log(this.variables.count)
          return countUpdate


     }

    //  count clicks in up and down buttons
     clickCounterUpdate() {
          if (this.variables.action === 'up' || this.variables.action === 'down') this.variables.clickCount++
     }

    //calls CountUpdate if user age is 18 or higher
     legalAge() {
          if (this.variables.userAge >= 18) {
               return true
          }
          return false
     }

    //  upgrades background color
     backgroundUpdate() {

          let positiveColor = 'var(--positive-bg-color)'
          let negativeColor = 'var(--negative-bg-color)'
          let count = this.variables.count

          if (count >= 10) this.variables.background = positiveColor;
          if (count <= -10) this.variables.background = negativeColor;
     }

     //check if user have count or background color in local storage
     checkLocalStorage() {
          return localStorage['count'] ? parseInt(localStorage['count']) : 0
          // console.log(this.variables.count)
     }

    //save current count in local storage
     updateLocalStorage(countUpdate:any) {
          localStorage['count'] = countUpdate
          // console.log(this.variables.count)
     }
}
