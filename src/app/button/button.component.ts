import {
  Component,
  computed,
  input,
  Input,
  OnInit,
  output,
} from '@angular/core';
import { ButtonConfig } from './interfaces/button-config';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements OnInit {
  @Input() config: ButtonConfig = {
    label: 'Click me',
    contador: 0,
  } as ButtonConfig;

  texto = input('', { transform: clear });

  otxet = computed(() => {
    console.log('renderizou a computed');
    return this.texto().split('').reverse().join('');
  });

  maxAtingido = output<{ mensagem: string }>();

  contador = 0;

  label = 'Click me';

  ngOnInit(): void {
    this.label = this.config.label;
    this.contador = this.config.contador;
  }

  increment() {
    if (this.config.max && this.contador < this.config.max) {
      this.contador++;
    } else {
      this.maxAtingido.emit({
        mensagem: `Máximo de ${this.config.max} atingido`,
      });
    }
  }
}

function clear(valor: string) {
  return (valor?.trim() || '').toLowerCase();
}
