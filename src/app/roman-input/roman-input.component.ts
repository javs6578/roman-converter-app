import { Component } from '@angular/core';
import { RomanConversionService } from '../roman-conversion.service';
import {HistoryDisplayComponent} from '../history-display/history-display.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-roman-input',
  standalone: true,
  templateUrl: './roman-input.component.html',
  imports: [
    CommonModule,
    HistoryDisplayComponent,
    FormsModule
  ],
  styleUrls: ['./roman-input.component.scss']
})
export class RomanInputComponent {
  romanInput = '';
  conversionResult: { roman: string; decimal: number | null } | null = null;
  history: { roman: string; decimal: number | null }[] = [];

  constructor(private conversionService: RomanConversionService) {}

  convertRoman(): void {
    const decimalValue = this.conversionService.convertRomanToDecimal(this.romanInput);
    this.conversionResult = { roman: this.romanInput, decimal: decimalValue };
    this.history.unshift(this.conversionResult);
    this.romanInput = '';
  }
}
