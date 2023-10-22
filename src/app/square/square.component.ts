import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button [class.pressed]="value !== null">{{ value }}</button>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
}
