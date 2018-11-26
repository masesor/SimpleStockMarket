import { Action } from 'redux';
import { AppActions } from '.';
import { ITrade } from 'src/models/trade';
import { IStock } from 'src/models/stock';
import { INewTradeForm } from 'src/models/form';

export type AppActionTypes =
 IApplicationLoad |
 IFetchTrades |
 IFetchTradesSuccess |
 IFetchStocks | 
 IFetchStocksSuccess |
 ISubmitTrade |
 ISubmitTradeSuccess |
 ISubmitTradeError |
 IToggleNewTradeFormDialog

export interface IApplicationLoad extends Action {
type:AppActions.APPLICATION_LOAD
}

export interface IFetchTrades extends Action {
    type: AppActions.FETCH_TRADES
}

export interface IFetchTradesSuccess extends Action {
    type: AppActions.FETCH_TRADES_SUCCESS,
    payload: ITrade[]
}

export interface IFetchStocks extends Action {
    type: AppActions.FETCH_STOCKS
}

export interface IFetchStocksSuccess extends Action {
    type: AppActions.FETCH_STOCKS_SUCCESS,
    payload: IStock[]
}

export interface ISubmitTrade {
    type:AppActions.SUBMIT_TRADE,
    payload: { tradeDetails: INewTradeForm }
}

export interface ISubmitTradeSuccess {
    type:AppActions.SUBMIT_TRADE_SUCCESS
}

export interface ISubmitTradeError {
    type:AppActions.SUBMIT_TRADE_ERROR
}

export interface IToggleNewTradeFormDialog {
    type:AppActions.TOGGLE_NEW_TRADE_FORM_DIALOG
}


