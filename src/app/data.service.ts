import { Injectable } from '@angular/core';
import { Noticia } from 'src/app/core/interfaces/Clases';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public NoticiasEsports: Noticia[] = [
    {
      id: 1000,
      titulo: 'Damwon Campeón de Worlds 2020',
      descripcion:
        'El equipo coreano Campeón, se acabó la racha de los equipos de China',
      imagen: '/assets/NoticiaDWM.jpg',
      texto: 'Texto',
      idUser: 0,
      categoria: 'Esports',
      fecha: '03/02/2021',
    },
    {
      id: 1001,
      titulo: 'Newbie se va a Golden Guardians',
      descripcion:
        'El soporte Argentino Leandro "Newbie" Marcos emigrará a la LCS de NA',
      imagen: 'assets/images/NewbieNoticia.jpg',
      texto: 'Texto',
      idUser: 0,
      categoria: 'Esports',
      fecha: '03/02/2021',
    },
    {
      id: 1001,
      titulo: 'Josedeodo, nuevo jugador de FlyQuest',
      descripcion:
        'El MVP de la temporada, Brandon"Josedeodo" Villegas se irá a NA',
      imagen: '/assets/JosedeOdo.png',
      texto: 'Texto',
      idUser: 0,
      categoria: 'Esports',
      fecha: '03/02/2021',
    },
  ];

  public NoticiasDeportes: Noticia[] = [
    {
      id: 1000,
      titulo: 'Liga de Campeones de la CONCACAF',
      descripcion: 'Cambia su formato en la final, siendo ahora a partido único',
      imagen: 'assets/CONCACAF.jpg',
      texto: 'owo',
      idUser: 0,
      categoria: 'Deporte',
      fecha: '04/02/2021',
    },
    {
      id: 1001,
      titulo: 'Tigres gana su primer partido.',
      descripcion: 'Los Tigres de México obtuvieron su primera victoria en el Mundial de Clubes.',
      imagen: 'assets/TvU.jpg',
      texto: 'owo',
      idUser: 0,
      categoria: 'Deporte',
      fecha: '04/02/2021',
    },
    {
      id: 1002,
      titulo: 'Definidas las semifinales.',
      descripcion: 'Se definieron los rivales para Palmeiras y el FC Bayern München.',
      imagen: 'assets/Semis.jpg',
      texto: 'owo',
      idUser: 0,
      categoria: 'Deporte',
      fecha: '04/02/2021',
    },
    {
      id: 1003,
      titulo: 'Checo Pérez nuevo piloto de Red Bull.',
      descripcion: 'El piloto mexicano firma con el equipo de Reb Bull para la F1.',
      imagen: 'assets/ChecoRedBull.jpg',
      texto: 'owo',
      idUser: 0,
      categoria: 'Deporte',
      fecha: '04/02/2021',
    },
    {
      id: 1004,
      titulo: 'Rayados pospondrá sus Partidos de Liga MX',
      descripcion: 'El conjunto Regiomontano obtuvo pruebas de Covid Positivas.',
      imagen: 'assets/rayados.jpg',
      texto: 'owo',
      idUser: 0,
      categoria: 'Deporte',
      fecha: '04/02/2021',
    },
  ];



  getNoticiasDeportes(): Noticia[]{
    return this.NoticiasDeportes;
  }

  getNoticiasEsports(): Noticia[]{
    return this.NoticiasEsports;
  }

  addNoticiaEsports(){}
  addNoticiaDeportes(){}
}
