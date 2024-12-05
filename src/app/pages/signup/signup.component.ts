import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  dados = { nome: '', sobrenome: '', username: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {}

  registre() {
    this.http
      .post('http://localhost:3000/usuarios', this.dados)
      .subscribe((resposta) => {
        console.log(resposta);
        this.router.navigate(['/entrar']);
      });
  }
}
