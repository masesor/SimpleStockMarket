import { IAppState } from '../models/state';

export const INITIAL_STATE:IAppState = {
    trades: [],
    stocks: [],
    isNewTradeFormOpen: false,
    form: null
};
