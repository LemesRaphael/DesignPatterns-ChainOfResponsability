import { Component, OnInit } from '@angular/core';
import { AssFisica } from 'src/app/formalizacoes/ass-fisica';
import { Biometria } from 'src/app/formalizacoes/biometria';
import { FormalizacaoDefault } from 'src/app/formalizacoes/default';
import { Pin } from 'src/app/formalizacoes/pin';
import { Remota } from 'src/app/formalizacoes/remota';

@Component({
  selector: 'app-case-solucao',
  templateUrl: './case-solucao.component.html',
  styleUrls: ['./case-solucao.component.scss', '../../app.component.scss']
})
export class CaseSolucaoComponent implements OnInit {
  tipos_formalizacao: string[] = ['Remota', 'Pin', 'Ass.Fisica', 'Biometria'];
  radio_formalizacao: any;

  constructor() { }

  ngOnInit(): void {
  }

  formalizacao() {
   const tipo_formalizacao_selecionado = new AssFisica(new Biometria(new Pin(new Remota(new FormalizacaoDefault()))));
    tipo_formalizacao_selecionado.proximo(this.radio_formalizacao)
  }
}
