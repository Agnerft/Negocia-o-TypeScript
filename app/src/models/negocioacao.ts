
export class Negociacao { // Fazendo assim, eu deixo a minha info publica,
                         // porém somente readonly(somente leitura)
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number,
        public readonly nome: string
        ) {}
    /*  // Quando criamos Uma negociação não podemos modificar os dados
        // então é criado os getter, pra eu pedir por favor,
        // como é só pra consiltar e não editar
        // pode ser feito  no método get ou o feito agora
    
    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor
    }
    */
    public get data(): Date {
        const data = new Date(this._data.getTime()); 
        return data;
    }
    public get volume(): number {
        return this.valor * this.quantidade;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string, nomeString: string): Negociacao{
        const exp = /-/g; /* Para retirar o - e colocar uma virgula no lugar a letra g no final quer dizer que tem escopo Global*/
        const date = new Date(dataString.replace(exp,','));
        /* A Date por padrão vem com o value xx-xx-xxx é colocado o .replace(passando a exp( que foi criada a const), ',' pelo que vamos substituir)*/
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        const nome = String(nomeString);
        return new Negociacao(date, quantidade, valor, nome);
    }
     
       
}