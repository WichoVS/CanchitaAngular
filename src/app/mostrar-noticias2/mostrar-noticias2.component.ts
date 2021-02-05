import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/core/interfaces/Clases';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-mostrar-noticias2',
  templateUrl: './mostrar-noticias2.component.html',
  styleUrls: ['./mostrar-noticias2.component.css']
})
export class MostrarNoticias2Component implements OnInit {

  NoticiasEsports: Noticia[];

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.getNoticiasDeportes();
  }

  getNoticiasDeportes(): void {
    this.NoticiasEsports = this.data.getNoticiasEsports();
  }

}
