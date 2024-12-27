import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-history-display',
  standalone: true,
  imports: [FormsModule, CommonModule, MatGridListModule, MatCardModule],
  templateUrl: './history-display.component.html',
  styleUrls: ['./history-display.component.scss']
})
export class HistoryDisplayComponent {
  @Input() history: { roman: string; decimal: number | null }[] = [];

  getChunks(): { roman: string; decimal: number | null }[][] {
    const chunks = [];
    for (let i = 0; i < this.history.length; i += 3) {
      chunks.push(this.history.slice(i, i + 3));
    }
    return chunks;
  }
}
