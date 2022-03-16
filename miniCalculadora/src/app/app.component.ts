import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniCalculadora';
  num1: number = NaN;
  num2: number = NaN;
  res: number = NaN;

  suma() {
    this.res = this.num1 + this.num2;
  }

  resta() {
    this.res = this.num1 - this.num2;
  }

  multi() {
    this.res = this.num1 * this.num2;
  }

  name: string = "";
  hasName:boolean = false;
  names: string [] = [];

  setName() {
    this.names.push(this.name);
    this.hasName = true;
  }

  isSpecialName(n: string): boolean {
    if(n == "Antonio") {
      return true
    }
    return false;
  }

  isLongName(n: string): boolean {
    if(n.length > 5) {
      return true
    }
    return false;
  }

}
