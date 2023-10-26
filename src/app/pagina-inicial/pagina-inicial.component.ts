import { ICarro } from './../ICarro';
import { Component, OnInit } from '@angular/core';
import { ComunicacaoService } from '../comunicacao.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {
  carros: ICarro[] = [];

  constructor( private service: ComunicacaoService){}

  async ngOnInit() {
    this.carros = await this.service.buscarCarros();
  }

}
