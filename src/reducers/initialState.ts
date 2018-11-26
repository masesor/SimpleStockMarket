import { IAppState } from '../models/state';
import { INewTradeForm } from 'src/models/form';
import { ITrade } from 'src/models/trade';

const defaultTrade:ITrade = {
    id: '',
    ticker: '',
    tradePrice: 0,
    quantity: 0,
    tradeType: null,
    tradeDate: null,
    tradeValue: 0
}

const defaultNewTradeForm:INewTradeForm = {
    isOpen: false,
    tradeDetails: defaultTrade
}

export const INITIAL_STATE:IAppState = {
    trades: [],
    stocks: [],
    newTradeForm: defaultNewTradeForm
};
