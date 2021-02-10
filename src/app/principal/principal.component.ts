import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Noticia } from 'src/app/core/interfaces/Clases';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  constructor(private data: DataService) {}
  NoticiasDeportes: Noticia[];
  NoticiasEsports: Noticia[];

  ngOnInit(): void {
    this.getNoticiasDeportes();
    this.getNoticiasEsports();
    this.data.sortNoticiasEsports();
    this.data.sortNoticiasDeportes();
  }

  getNoticiasDeportes(): void {
    this.NoticiasDeportes = this.data.getNoticiasDeportes();
  }

  getNoticiasEsports(): void {
    this.NoticiasEsports = this.data.getNoticiasEsports();
  }

}
