import { BuySellInd } from './trade';

export interface INewTradeForm {
  ticker:string;
  buySellInd:BuySellInd;
  tradePrice:number;
  quantity:number;
}

export const INTIAL_FORM_STATE = {
  ticker: null,
  buySellInd: BuySellInd.Buy, // Default as a buy in the form
  tradePrice: null,
  quantity: null
} as any;
