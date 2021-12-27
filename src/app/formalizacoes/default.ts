import { FormalizacoesInterface } from "../interface/formalizacoes.interface";

export class FormalizacaoDefault implements FormalizacoesInterface {
    proximo(tipo_formalizacao: string): void {
       alert(`Case-Solução: Formalização não encontrada (${tipo_formalizacao})`)
       return;
    }
}