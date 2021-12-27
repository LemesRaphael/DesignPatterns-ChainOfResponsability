import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-problema',
  templateUrl: './case-problema.component.html',
  styleUrls: ['./case-problema.component.scss', '../../app.component.scss']
})

export class CaseProblemaComponent implements OnInit {
  tipos_formalizacao: string[] = ['Remota', 'Pin', 'Ass.Fisica', 'Biometria'];
  radio_formalizacao: any;

  constructor() { }

  ngOnInit(): void {
  }

  formalizacao() {
    if(this.radio_formalizacao === 'Remota') {
      alert('Formalização remota');
    } else if (this.radio_formalizacao === 'Pin') {
      alert('Formalização por Pin');
    } else if (this.radio_formalizacao === 'Ass.Fisica') {
      alert('Formalização por assinatura fisica');
    } else if(this.radio_formalizacao === 'Biometria') {
      alert('Formalização por Biometria');
    }
  }

}
