import { Component } from '@angular/core';
import {RomanInputComponent} from './roman-input/roman-input.component';

@Component({
  selector: 'app-root',
  imports: [
    RomanInputComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RomanConverterApp';
}
