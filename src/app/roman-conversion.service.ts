import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RomanConversionService {
  private romanMap: { [key: string]: number } = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
  };

  convertRomanToDecimal(roman: string): number | null {
    if (!this.isValidRoman(roman)) return null;
    let decimal = 0;
    let prevValue = 0;

    for (let char of roman.toUpperCase()) {
      const currentValue = this.romanMap[char];
      if (currentValue > prevValue) {
        decimal += currentValue - 2 * prevValue;
      } else {
        decimal += currentValue;
      }
      prevValue = currentValue;
    }

    return decimal;
  }

  private isValidRoman(roman: string): boolean {
    const romanPattern = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    return romanPattern.test(roman.toUpperCase());
  }
}
