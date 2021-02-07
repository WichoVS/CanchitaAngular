import { Injectable } from '@angular/core';
import { Users } from 'src/app/core/interfaces/Clases';

@Injectable({
  providedIn: 'root',
})


export class UsersService {
  // 0 = admin;
  // 1 = moderador;
  // 2 = editor;
  // 3 = usuarioRegular

  usuariosRegistrados: Users[] = [
    {
      id: 1000,
      username: 'Wicho',
      password: '1234qwer',
      nombre: 'Luis',
      apellido: 'Villanueva',
      birth: '070399',
      avatar:'/assets/fakerUserImage.jpg',
      tipo: 0,
    },
    {
      id: 1001,
      username: 'moderador',
      password: '1234qwer',
      nombre: 'Usuario',
      apellido: 'Moderador',
      birth: '040598',
      avatar:'/assets/moderador.jpg',
      tipo: 1,
    },
    {
      id: 1002,
      username: 'editor',
      password: '1234qwer',
      nombre: 'Usuario',
      apellido: 'Editor',
      birth: '030899',
      avatar:'/assets/editor.jpg',
      tipo: 2,
    },
    {
      id: 1003,
      username: 'regular',
      password: '1234qwer',
      nombre: 'Usuario',
      apellido: 'Regular',
      birth: '200502',
      avatar:'/assets/creador.jpg',
      tipo: 3,
    },
  ];


  usuarioLogeado: Users;

  getUsuarioLoggeado() {
    debugger;
    if (this.usuarioLogeado) {
      return this.usuarioLogeado;
    }

    return null;
  }

  setUsuarioLogeado(userlog: Users) {
    this.usuarioLogeado = userlog;
  }

  checkUsuario(usuario: string, password: string): boolean {
    let indexUser = null;
    let isUserFind = false;
    let i = 0;

    let maxSize = this.usuariosRegistrados.length;

    while (!isUserFind && i <= maxSize) {
      if (
        this.usuariosRegistrados[i].username === usuario &&
        this.usuariosRegistrados[i].password === password
      ) {
        indexUser = i;
        isUserFind = true;
        this.setUsuarioLogeado(this.usuariosRegistrados[indexUser]);
      }
    }

    return isUserFind;
  }

  constructor() {}
}
