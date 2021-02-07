import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class Noticia {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  texto: string;
  idUser: number;
  categoria: string;
  fecha: string;
}

export class Users
{
  id: number;
  username: string;
  password: string;
  nombre: string;
  apellido: string;
  birth: string;
  avatar: string;
  tipo: number;
}
