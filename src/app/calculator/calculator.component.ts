import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent {
  operator: string
  first = ""
  second = ""
  operations = ['+', '-', '*','/','!','p']
  display = ""
  constructor() 
  {
    this.operator = ""
  }

  calculate() {
    if (this.operator != "") {
      let first = parseFloat(this.first)     
      let second = parseFloat(this.second)

      switch (this.operator) {
        case '+':
          this.display = `${this.display}=${first + second}`
          break;

        case '-':
          this.display= `${this.display}=${first - second}`
          break;

        case '*':
          this.display = `${this.display}=${first * second}`
          break;

        case '/':
          this.display = `${this.display}=${first / second}`
          break;

        case '!':
          var num:number = first; 
          var factorial:number = 1; 
          while(num >=1) { 
              factorial = factorial * num; 
              num--; 
          } 
          this.display = `${this.display}=${factorial}`
          break;

        case 'p':
          var num:number = first; 
          var flag:number = 0;
          var i:number = 2;
          while(num>i) { 
              if(num%i==0){
                flag = 1;
                break;
              }
              i++;
          } 
          if(flag == 0){
            this.display = `${this.display}=${'Prime'}`
          }else{
            this.display = `${this.display}=${'Not Prime'}`
          }
          break;

        default:
          break;
      }
    }
  }

  Number(value: number) {
    if (this.operator != "") {
      this.second += value
      this.display = `${this.first}${this.operator}${this.second}`
    } 
    else {
      this.first += value
      this.display = this.first
    }
  }

  Operator(operator: string) {
    if (this.operator != "") {
      this.display = `${this.display.substring(1, this.display.length - 1)}${operator}`
    } else {
      this.display = `${this.display}${operator}`
    }
    this.operator = operator
  }

  Clear(){
    this.display="";
    this.first = ""
    this.second = ""
    this.operator = ""
  }
}