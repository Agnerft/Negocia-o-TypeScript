var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInject } from "../decorator/injetor-de-DOM.js";
import { inspect } from "../decorator/inspect.js";
import { logarTempoDeExecucao } from "../decorator/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../emums/dias-da-semana.js";
import { Negociacoes } from "../models/negociacoes.js";
import { Negociacao } from "../models/negocioacao.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.mensagem = new MensagemView('#mensagemView');
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value, this.inputNome.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagem.update('Aceitamos negociações somente em dias úteis!');
            this.inputData.value = '';
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputNome.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.mensagem.update('Negociação adicionada com sucesso!');
        this.negociacoesView.update(this.negociacoes);
    }
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
    }
}
__decorate([
    domInject('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInject('#quantidade')
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInject('#valor')
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    domInject('#nome')
], NegociacaoController.prototype, "inputNome", void 0);
__decorate([
    inspect,
    logarTempoDeExecucao()
], NegociacaoController.prototype, "adiciona", null);
