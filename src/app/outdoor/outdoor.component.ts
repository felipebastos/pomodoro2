import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-outdoor',
  imports: [],
  templateUrl: './outdoor.component.html',
  styleUrl: './outdoor.component.css',
})
export class OutdoorComponent {
  @Input() valor = 0;
}
