import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/core/interfaces/Clases';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-mostrar-noticias',
  templateUrl: './mostrar-noticias.component.html',
  styleUrls: ['./mostrar-noticias.component.css']
})
export class MostrarNoticiasComponent implements OnInit {

NoticiasDeportes: Noticia[];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getNoticiasDeportes();
  }

  getNoticiasDeportes(): void {
    this.NoticiasDeportes = this.data.getNoticiasDeportes();
  }

}
