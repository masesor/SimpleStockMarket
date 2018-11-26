import { Action } from 'redux';
import { AppActions } from '.';
import { ITrade, IStock } from 'src/models/trade';

export type AppActionTypes =
 IApplicationLoad |
 IFetchTrades |
 IFetchTradesSuccess |
 IFetchStocks | 
 IFetchStocksSuccess |
 ISubmitTrade |
 ISubmitTradeSuccess |
 IUpdateFormField

export interface IApplicationLoad extends Action {
type:AppActions.APPLICATION_LOAD;
}

export interface IFetchTrades extends Action {
    type: AppActions.FETCH_TRADES;
}

export interface IFetchTradesSuccess extends Action {
    type: AppActions.FETCH_TRADES_SUCCESS,
    payload: { trades: ITrade[] };
}

export interface IFetchStocks extends Action {
    type: AppActions.FETCH_STOCKS;
}

export interface IFetchStocksSuccess extends Action {
    type: AppActions.FETCH_STOCKS_SUCCESS,
    payload: { stocks: IStock[] };
}

export interface ISubmitTrade {
    type:AppActions.SUBMIT_TRADE;
}

export interface ISubmitTradeSuccess {
    type:AppActions.SUBMIT_TRADE_SUCCESS;
}

export interface IUpdateFormField {
    type:AppActions.UPDATE_FORM_FIELD;
    payload:{ [id:string]:any }
}


