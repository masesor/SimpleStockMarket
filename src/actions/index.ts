import { AppActionTypes } from './actionTypes';
import { ITrade, IStock } from 'src/models/trade';
import { INewTradeForm } from 'src/models/form';

export enum AppActions {
    APPLICATION_LOAD = 'APPLICATION_LOAD',

    FETCH_TRADES = 'FETCH_TRADES',
    FETCH_TRADES_SUCCESS = 'FETCH_TRADES_SUCCESS',
    
    FETCH_STOCKS = 'FETCH_STOCKS',
    FETCH_STOCKS_SUCCESS = 'FETCH_STOCKS_SUCCESS',
    
    SUBMIT_TRADE = 'SUBMIT_TRADE',
    SUBMIT_TRADE_SUCCESS = 'SUBMIT_TRADE_SUCCESS',
    SUBMIT_TRADE_ERROR = 'SUBMIT_TRADE_ERROR',

    TOGGLE_NEW_TRADE_FORM_DIALOG = 'TOGGLE_NEW_TRADE_FORM_DIALOG'
}

export const applicationLoad = ():AppActionTypes => ({
    type: AppActions.APPLICATION_LOAD
});

export const fetchTrades = ():AppActionTypes => ({
    type: AppActions.FETCH_TRADES
});

export const fetchTradesSuccces = (trades:ITrade[]):AppActionTypes => ({
    type: AppActions.FETCH_TRADES_SUCCESS,
    payload: trades
});

export const fetchStocks = ():AppActionTypes => ({
    type: AppActions.FETCH_STOCKS
});

export const fetchStocksSuccces = (stocks:IStock[]):AppActionTypes => ({
    type: AppActions.FETCH_STOCKS_SUCCESS,
    payload: stocks
});

export const submitTrade = (tradeDetails:INewTradeForm):AppActionTypes => ({
    type: AppActions.SUBMIT_TRADE,
    payload: { tradeDetails }
});

export const submitTradeSuccess = ():AppActionTypes => ({
    type: AppActions.SUBMIT_TRADE_SUCCESS
});

export const submitTradeError = ():AppActionTypes => ({
    type: AppActions.SUBMIT_TRADE_ERROR
});

export const toggleNewTradeFormDialog = ():AppActionTypes => ({
    type: AppActions.TOGGLE_NEW_TRADE_FORM_DIALOG
});