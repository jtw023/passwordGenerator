import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  password = '';

  useSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  useNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  useLetters() {
    this.includeLetters = !this.includeLetters;
  }

  getValue(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validchars = '';
    if (this.includeLetters) {
      validchars += letters;
    }
    if (this.includeNumbers) {
      validchars += numbers;
    }
    if (this.includeSymbols) {
      validchars += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validchars.length);

      generatedPassword += validchars[index];
    }

    this.password = generatedPassword;
  }
}
