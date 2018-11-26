export enum StockType {
    Common = 'Common',
    Preferred = 'Preferred'
}

export interface IStock {
  ticker:string;
  stockType:StockType;
  lastDividend:number;
  fixedDividend?:number;
  parValue:number;
}

export interface IStockDetail extends IStock {
  dividendYield:number;
  peRatio:number;
  geometricMean:number;
  stockPrice:number;
}
