class Negociacoes{

    constructor(){

    }

    private _negociacoes: Array<Negociacao> = [];
    //private _negociacoes: Negociacao[] = []; outra maneira de declarar

    adiciona(negociacao: Negociacao){
        this._negociacoes.push(negociacao);
    }

    paraArray (): Negociacao[]{
        //return this._negociacoes; isso permite que eu retire elementos
        return [].concat(this._negociacoes);//devolve uma copia
    }
}