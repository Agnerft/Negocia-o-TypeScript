import { domInject } from "../decorator/injetor-de-DOM.js";
import { inspect } from "../decorator/inspect.js";
import { logarTempoDeExecucao } from "../decorator/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../emums/dias-da-semana.js";
import { Negociacoes } from "../models/negociacoes.js";
import { Negociacao } from "../models/negocioacao.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    @domInject('#data')
    private inputData: HTMLInputElement;
    @domInject('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInject('#valor')
    private inputValor: HTMLInputElement;
    @domInject('#nome')
    private inputNome: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private mensagem = new MensagemView('#mensagemView');
    private negociacoesView = new NegociacoesView('#negociacoesView');
   
    constructor() { // <HTMLInputElement> ou " as HTMLInputElement" eu estou fazendo um Cast, estou
                    // dizendo explicitamente que aquele query é HTMLInputElement
        //this.inputData = <HTMLInputElement>document.querySelector('#data');
        //this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
       //this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        //this.inputNome = document.querySelector('#nome') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    @inspect
    @logarTempoDeExecucao()
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value,
            this.inputNome.value
        );
        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagem.update('Aceitamos negociações somente em dias úteis!')
            this.inputData.value = '';
            return ;
        }          
            this.negociacoes.adiciona(negociacao);
            this.atualizaView();    
            this.limparFormulario();      
    }
    
    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputNome.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.mensagem.update('Negociação adicionada com sucesso!');
        this.negociacoesView.update(this.negociacoes);
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
    }
}
