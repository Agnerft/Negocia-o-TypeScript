var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { escape } from "../decorator/escape.js";
import { ViewGeneric } from "./viewGeneric.js";
export class NegociacoesView extends ViewGeneric {
    template(model) {
        return `       
        <table class=" table table-hover"> 
            <thead class="border">
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>NOME<th>
                </tr>
            </thead>    
            <tbody class="border">
                ${model.lista().map(negociacao => {
            return `
                        <tr>
                            <td>${this.formatar(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.nome}</td>
                        </tr>
                    `;
        }).join('')}
            </tbody>
        </table>    
        `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
__decorate([
    escape
], NegociacoesView.prototype, "template", null);
