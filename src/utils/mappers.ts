import { INewTradeForm } from 'src/models/form';

export const getNewTradePayload = (tradeDetails:INewTradeForm) => ({
  ticker: tradeDetails.ticker,
  buySellInd: tradeDetails.buySellInd,
  tradePrice: tradeDetails.tradePrice,
  quantity: tradeDetails.quantity
});
