export class Negociacao {
    constructor(_data, quantidade, valor, nome) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
        this.nome = nome;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
    static criaDe(dataString, quantidadeString, valorString, nomeString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        const nome = String(nomeString);
        return new Negociacao(date, quantidade, valor, nome);
    }
}
