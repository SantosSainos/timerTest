import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  started = false;
  minutes= 25;
  seconds= 0;
  newMin= 60;
  interval: any;

  constructor() {
  }

  resetVariables(mins, secs, started) {
    this.minutes = mins;
    this.seconds = secs;
    this.started = started;
  }

  start() {
    this.started = true;
    this.interval = setInterval(() => {
      if (this.started) {
        if (this.newMin > 0) {
          this.newMin --;
          this.seconds = this.newMin;
        } else {
          this.newMin = 59;
          this.seconds = this.newMin;
          if (this.minutes > 0) {
            this.minutes --;
          } else {
            this.minutes = 25;
          }
        }
      }
    }, 1000);
  }

  addFive() {
    this.minutes += 5;
  }

  minusFive() {
    if (this.minutes > 0) {
      this.minutes -= 5;
    }
  }


  stop() {
    this.started = false;
    clearInterval(this.interval);
    this.resetVariables(25, 0, this.started);
  }

}

