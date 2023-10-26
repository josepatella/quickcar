import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICarro } from './ICarro';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacaoService {

  private readonly API_CARROS =  'http://localhost:3000/carros'

  usuarios: ICarro[]=[];

  constructor(private httpClient: HttpClient) { }

  //async cadastrarUsuario(usuario: IUsuario){
  //  try{
  //    return await lastValueFrom (this.httpClient.post(this.API_USUARIOS, usuario));
  //  } catch (e){
  //    throw new Error("Erro ao cadastrar Usuário!")
  //  }
  //}
  buscarCarros() {
    return lastValueFrom (this.httpClient.get<ICarro[]>(this.API_CARROS))
  }
}
