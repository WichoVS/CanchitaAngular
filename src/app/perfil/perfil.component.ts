import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Noticia } from 'src/app/core/interfaces/Clases';
import { Users } from '../core/interfaces/Clases';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuarioLogeadoP: Users;
  noticiasMarcadas: Noticia[];

  constructor(private users: UsersService, private data: DataService) { }

  ngOnInit(): void {
    this.getUsuarioLogeado();
  }

  getUsuarioLogeado() {
    this.usuarioLogeadoP = this.users.getUsuarioLoggeado();
  }

}
