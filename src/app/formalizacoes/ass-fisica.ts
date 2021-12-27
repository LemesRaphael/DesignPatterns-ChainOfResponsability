import { FormalizacoesInterface } from "../interface/formalizacoes.interface";

export class AssFisica implements FormalizacoesInterface {
    
    constructor(private tipo_formalizacao: FormalizacoesInterface) {}
    
    proximo(tipo_formalizacao: string) {
        if(tipo_formalizacao == 'Ass.Fisica') {
            alert('Case-Solucao: Formalização por Assinatura fisica')
            return;
        }
        return this.tipo_formalizacao.proximo(tipo_formalizacao);
    }
 
}