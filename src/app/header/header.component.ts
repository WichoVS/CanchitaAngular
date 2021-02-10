import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { Users } from '../core/interfaces/Clases';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  usuarioLogeadoH: Users;
  logged = false;

  constructor(private users: UsersService) {}

  ngOnInit(): void {
    this.getUsuarioLogeado();
    if (this.usuarioLogeadoH != null) {
      this.logged = true;
    }
  }

  getUsuarioLogeado() {
    this.usuarioLogeadoH = this.users.getUsuarioLoggeado();
  }

  setLogout() {
    this.users.Logout();
  }
}
