import { FormalizacoesInterface } from "../interface/formalizacoes.interface";

export class Biometria implements FormalizacoesInterface {

    constructor(private tipo_formalizacao: FormalizacoesInterface) { }

    proximo(tipo_formalizacao: string): void {
        if(tipo_formalizacao === 'Biometria') {
            alert('Case-Solução: Formalização por Biometria')
            return;
        }

        return this.tipo_formalizacao.proximo(tipo_formalizacao);
     }

}