import { Component, OnInit } from '@angular/core';
import { debug } from 'console';
import {UsersService} from 'src/app/users.service';
import { Users } from '../core/interfaces/Clases';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuarioLogeado: Users;
  logged = false;

  constructor(private users: UsersService) { }

  ngOnInit(): void {
    this.getUsuarioLogeado();
    if(this.usuarioLogeado!=null)
    {
      this.logged= true;
    }
  }

  getUsuarioLogeado(){
    this.usuarioLogeado = this.users.getUsuarioLoggeado();
  }

}
