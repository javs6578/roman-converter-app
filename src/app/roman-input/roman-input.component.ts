import { Component } from '@angular/core';
import { RomanConversionService } from '../roman-conversion.service';
import { HistoryDisplayComponent } from '../history-display/history-display.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-roman-input',
  standalone: true,
  templateUrl: './roman-input.component.html',
  imports: [
    CommonModule,
    HistoryDisplayComponent,
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
  ],
  styleUrls: ['./roman-input.component.scss'],
})
export class RomanInputComponent {
  romanInput = '';
  conversionResult: { roman: string; decimal: number | null } | null = null;
  history: { roman: string; decimal: number | null }[] = [];
  isValidRoman = true;

  constructor(private conversionService: RomanConversionService) {}

  onEnter(event: Event): void {
    if (event instanceof KeyboardEvent) {
      event.preventDefault();
      this.validateRomanInput();
      if (!this.isValidRoman) {
        // Si no es válido, mostrar error
        return;
      }

      this.convertRoman();
    }
  }

  convertRoman(): void {
    const decimalValue = this.conversionService.convertRomanToDecimal(this.romanInput);
    this.conversionResult = { roman: this.romanInput, decimal: decimalValue };
    this.history.unshift(this.conversionResult);
    this.romanInput = '';
  }

  validateRomanInput(): void {
    const trimmedInput = this.romanInput.trim();
    const romanPattern = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

    if (!trimmedInput) {
      // Si está vacío o solo hay espacios
      this.isValidRoman = false;
      return;
    }
    this.isValidRoman = romanPattern.test(this.romanInput.toUpperCase());
  }
}
