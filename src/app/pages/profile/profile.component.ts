import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  dados = { nome: '', sobrenome: '' };

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.paramMap.subscribe((params) => {
      this.http
        .get(`http://localhost:3000/usuarios/${params.get('id')}`)
        .subscribe((data: any) => {
          this.dados = data;
        });
    });
  }
}
