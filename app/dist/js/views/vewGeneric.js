export class ViewGeneric {
    construtor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    get elemento() {
        return this._elemento;
    }
}
