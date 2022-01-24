import { ViewGeneric } from "./viewGeneric.js";

export class MensagemView extends ViewGeneric<string> {

    protected template(model: string): string {
        return `
        <p class= "alert alert-info">${model}</p>
        `;
    }
}