import { rootReducer } from './rootReducer';
import { INITIAL_STATE } from './initialState';
import { IAppState } from '../models/state';
import { ITrade, BuySellInd } from '../models/trade';
import { AppActionTypes } from '../actions/actionTypes';
import { AppActions } from '../actions';
import { IStock, StockType } from '../models/stock';

describe('Root Reducer', () => {
  it('returns initial state when no state is given', () => {
    // Act
    const newState = rootReducer(undefined, {
      type: 'UNKNOWN_ACTION'
    });

    // Assert
    expect(newState).toEqual(INITIAL_STATE);
  });

  it('returns current state when action is not matched', () => {
    // Arrange
    const state:IAppState = {
      ...INITIAL_STATE
    };

    // Act
    const newState = rootReducer(state, {
      type: 'UNKNOWN_ACTION'
    });

    // Assert
    expect(newState).toBe(state);
  });

  describe('Trades Reducer', () => {
    it('is initialised with an empty array', () => {
      // Act
      const state:IAppState = {
        ...INITIAL_STATE
      };

      // Assert
      expect(state.trades).toEqual([]);
    });

    it('Updates trades when getTrades returns success', () => {
      const state:IAppState = {
        ...INITIAL_STATE
      };

      const newTradeState:ITrade[] = [
        {
          id: '001',
          ticker: 'TEST',
          buySellInd: BuySellInd.Buy,
          tradePrice: 1.5,
          quantity: 5,
          tradeDate: new Date(),
          tradeValue: 5
        }
      ];

      const action:AppActionTypes = {
        type: AppActions.FETCH_TRADES_SUCCESS,
        payload: newTradeState
      };

      // Act
      const newState = rootReducer(state, action);

      // Assert
      expect(newState.trades).toEqual(newTradeState);
    });
  });

  describe('Stocks reducer', () => {
    it('is initialised with an empty array', () => {
      // Act
      const state:IAppState = {
        ...INITIAL_STATE
      };

      // Assert
      expect(state.stocks).toEqual([]);
    });

    it('Updates stocks when getStocks returns success', () => {
      const state:IAppState = {
        ...INITIAL_STATE
      };

      const newStocksState:IStock[] = [
        {
          ticker: 'TEST',
          stockType: StockType.Common,
          lastDividend: 5,
          fixedDividend: 6,
          parValue: 50
        }
      ];

      const action:AppActionTypes = {
        type: AppActions.FETCH_STOCKS_SUCCESS,
        payload: newStocksState
      };

      // Act
      const newState = rootReducer(state, action);

      // Assert
      expect(newState.stocks).toEqual(newStocksState);
    });
  });

  describe('isNewTradeFormOpen reducer', () => {
    it('is initialised to false', () => {
      // Act
      const state:IAppState = {
        ...INITIAL_STATE
      };

      // Assert
      expect(state.isNewTradeFormOpen).toEqual(false);
    });

    it('Sets isNewTradeFormOpen to true when toggled', () => {
      const state:IAppState = {
        ...INITIAL_STATE
      };

      const action:AppActionTypes = {
        type: AppActions.TOGGLE_NEW_TRADE_FORM_DIALOG
      };

      // Act
      const newState = rootReducer(state, action);

      // Assert
      expect(newState.isNewTradeFormOpen).toEqual(true);
    });
  });
});
