
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComunicacaoService } from '../comunicacao.service';
import { IOferta } from '../IOferta';

@Component({
  selector: 'app-formulario-interesse',
  templateUrl: './formulario-interesse.component.html',
  styleUrls: ['./formulario-interesse.component.css']
})
export class FormularioInteresseComponent implements OnInit {
  formulariocadastro:any = FormGroup;
  oferta: any;


  constructor(private service: ComunicacaoService, private router: Router, private fb: FormBuilder) {

    this.formulariocadastro = this.fb.group({
      nome: ['', [
        Validators.required,
      ]],
      telefone: ['', Validators.required, ],
      email: ['', [Validators.required,Validators.email]],
      valor: ['', Validators.required],
      mensagem: ['', Validators.required]
    });

  }
  async ngOnInit() {

  }

  async cadastroOferta() {
      const oferta: IOferta = {
        nome: this.formulariocadastro.get('nome')?.value,
        telefone: this.formulariocadastro.get('telefone')?.value,
        email: this.formulariocadastro.get('email')?.value,
        valor: this.formulariocadastro.get('valor')?.value,
        mensagem: this.formulariocadastro.get('mensagem')?.value,
      };


    await this.service.cadastrarOferta(oferta);
    this.router.navigate(["/"]);

  }


}
