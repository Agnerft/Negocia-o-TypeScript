import { Negociacao } from "./negocioacao.js"

export class Negociacoes {
    private negociacoes: Negociacao[] = []; // Forma mais simplificada e genérica
    //private negociacoes: Array<Negociacao> = []; <-- Forma mais verbosa


    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    /*lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    } Forma mais verbosa  */

    public lista(): readonly Negociacao[] {// Forma mais simplificada e genérica
        return this.negociacoes;
    }

}