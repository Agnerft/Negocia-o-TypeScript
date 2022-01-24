
import { escape } from "../decorator/escape.js";
import { Negociacoes } from "../models/negociacoes.js";
import { ViewGeneric } from "./viewGeneric.js";

export class NegociacoesView extends ViewGeneric<Negociacoes> {
    @escape
    protected template(model: Negociacoes): string {
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

    private formatar(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }
}