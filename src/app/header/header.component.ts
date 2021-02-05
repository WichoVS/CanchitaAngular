import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/core/interfaces/Clases';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public NoticiasEsports: Noticia[] = [
    {
      id: 1000,
      titulo: 'Damwon Campeón de Worlds 2020',
      descripcion:
        'El equipo coreano Campeón, se acabó la racha de los equipos de China',
      imagen: 'src/assets/NoticiaDWM.jpg',
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
      imagen: 'src/assets/JosedeOdo.png',
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
      imagen: 'assets/images/CONCACAF.jpg',
      texto: 'owo',
      idUser: 0,
      categoria: 'Deporte',
      fecha: '04/02/2021',
    },
    {
      id: 1001,
      titulo: 'Tigres gana su primer partido.',
      descripcion: 'Los Tigres de México obtuvieron su primera victoria en el Mundial de Clubes.',
      imagen: 'assets/images/TvU.jpg',
      texto: 'owo',
      idUser: 0,
      categoria: 'Deporte',
      fecha: '04/02/2021',
    },
    {
      id: 1002,
      titulo: 'Definidas las semifinales.',
      descripcion: 'Se definieron los rivales para Palmeiras y el FC Bayern München.',
      imagen: 'assets/images/Semis.jpg',
      texto: 'owo',
      idUser: 0,
      categoria: 'Deporte',
      fecha: '04/02/2021',
    },
    {
      id: 1003,
      titulo: 'Checo Pérez nuevo piloto de Red Bull.',
      descripcion: 'El piloto mexicano firma con el equipo de Reb Bull para la F1.',
      imagen: 'assets/images/CechoRedBull.jpg',
      texto: 'owo',
      idUser: 0,
      categoria: 'Deporte',
      fecha: '04/02/2021',
    },
    {
      id: 1004,
      titulo: 'Rayados pospondrá sus Partidos de Liga MX',
      descripcion: 'El conjunto Regiomontano obtuvo pruebas de Covid Positivas.',
      imagen: 'assets/images/rayados.jpg',
      texto: 'owo',
      idUser: 0,
      categoria: 'Deporte',
      fecha: '04/02/2021',
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
