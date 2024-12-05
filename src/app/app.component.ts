import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ButtonConfig } from './button/interfaces/button-config';
import { FormsModule } from '@angular/forms';
import { OutdoorComponent } from './outdoor/outdoor.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pomodoro';
  novoTexto = '';

  config1: ButtonConfig = {
    label: 'Ermeson',
    contador: 2,
    max: 5,
  } as ButtonConfig;

  passar = 0;

  avisar($event: { mensagem: string }) {
    alert($event.mensagem);
    this.passar++;
  }

  constructor(private cliente: HttpClient) {}
}
