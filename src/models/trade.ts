export interface IStock {
    ticker:string;
    stockType:string;
    price:number;
    lastDividend:number;
    fixedDividend?:number;
    parValue:number
}

export interface ITrade {
    id?:string;
    ticker:string;
    tradePrice:number;
    quantity:number;
    tradeType:IBuySellInd;
    tradeDate:Date;
    tradeValue:number
}

export enum IBuySellInd {
    Buy = 'B',
    Sell = 'S'
}