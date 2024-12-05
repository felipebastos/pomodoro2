import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-signin',
  imports: [FormsModule, RouterModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent implements OnDestroy {
  credencial = { id: '', username: '', password: '' };

  listaUsuarios: { id: String; username: String; password: String }[] = [];

  destroy$ = new Subject();

  ngOnDestroy() {
    this.destroy$.next(1);
    this.destroy$.complete();
  }

  constructor(private http: HttpClient, private router: Router) {
    this.http
      .get<{ id: string; username: String; password: String }[]>(
        'http://localhost:3000/usuarios'
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe((usuarios) => {
        this.listaUsuarios = usuarios;
      });
  }

  entrar() {
    const usuario = this.listaUsuarios.find(
      (usuario) =>
        usuario.username === this.credencial.username &&
        usuario.password === this.credencial.password
    );

    if (usuario) {
      alert('Usuário logado com sucesso');
      this.router.navigate(['/profile', usuario.id]);
    } else {
      alert('Usuário ou senha inválidos');
    }
  }
}
