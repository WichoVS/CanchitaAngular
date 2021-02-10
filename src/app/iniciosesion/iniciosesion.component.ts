import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css'],
})
export class IniciosesionComponent implements OnInit {
  usuario: string = '';
  password: string = '';
  succes: boolean;

  constructor(private users: UsersService, private router: Router) {}

  ngOnInit(): void {}

  setUsuarioLogeado() {
    debugger;
    if (this.users.checkUsuario(this.usuario, this.password)) {
      this.succes = true;
      this.router.navigate(['/Inicio']);
    } else {
      this.succes = false;
      alert('No existe este usuario');
    }
  }
}
