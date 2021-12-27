import { FormalizacoesInterface } from "../interface/formalizacoes.interface";

export class Pin implements FormalizacoesInterface {
    
    constructor(private tipo_formalizacao: FormalizacoesInterface) {}

    proximo(tipo_formalizacao: string): void {
        if(tipo_formalizacao === 'Pin') {
            alert('Case-Solução: Formalização por Pin');
            return;
        }

        return this.tipo_formalizacao.proximo(tipo_formalizacao)
    }
}