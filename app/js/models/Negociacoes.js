class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    //private _negociacoes: Negociacao[] = []; outra maneira de declarar
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        //return this._negociacoes; isso permite que eu retire elementos
        return [].concat(this._negociacoes); //devolve uma copia
    }
}
