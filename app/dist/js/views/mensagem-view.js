import { ViewGeneric } from "./viewGeneric.js";
export class MensagemView extends ViewGeneric {
    template(model) {
        return `
        <p class= "alert alert-info">${model}</p>
        `;
    }
}
