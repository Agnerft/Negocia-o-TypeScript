import { inspect } from "../decorator/inspect.js";
import { logarTempoDeExecucao } from "../decorator/logar-tempo-de-execucao.js";

export abstract class ViewGeneric<T> {
    
    protected elemento: HTMLElement;
  
 
    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = <HTMLInputElement> elemento;
        } else{
            throw Error(`Seletor ${seletor} não existe no DOM. Favor verificar.`)
        }     
    }

    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;   
  
}