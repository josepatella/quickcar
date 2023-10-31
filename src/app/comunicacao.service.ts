import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICarro } from './ICarro';
import { lastValueFrom } from 'rxjs';
import { IOferta } from './IOferta';

@Injectable({
  providedIn: 'root'
})
export class ComunicacaoService {

  private readonly API_CARROS =  'http://localhost:3000/carros'
  private readonly API_OFERTAS =  'http://localhost:3000/ofertas'

  usuarios: ICarro[]=[];

  constructor(private httpClient: HttpClient) { }

  async cadastrarOferta(oferta: IOferta){
  try{
      return await lastValueFrom (this.httpClient.post(this.API_OFERTAS, oferta));
   } catch (e){
      throw new Error("Erro ao cadastrar Oferta!")
    }
  }
  buscarCarros() {
    return lastValueFrom (this.httpClient.get<ICarro[]>(this.API_CARROS))
  }
}
