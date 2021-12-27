import { FormalizacoesInterface } from "../interface/formalizacoes.interface";

export class Remota implements FormalizacoesInterface {
    
    constructor(private tipo_formalizacao: FormalizacoesInterface) {}
    
    proximo(tipo_formalizacao: string): void {
        if(tipo_formalizacao === 'Remota') {
            alert('Case-Solução: Formalização Remota');
            return;
        }

        return this.tipo_formalizacao.proximo(tipo_formalizacao);
    }

}