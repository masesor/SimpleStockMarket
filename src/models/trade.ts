export enum BuySellInd {
  Buy = 'B',
  Sell = 'S'
}

export interface ITrade {
  id?:string;
  ticker:string;
  buySellInd:BuySellInd;
  tradePrice:number;
  quantity:number;
  tradeDate:Date;
  tradeValue:number;
}

export enum IStockType {
    Common = 'Common',
    Preferred = 'Preferred'
}