import { ITrade, IStock } from './trade';
import { INewTradeForm } from './form';

export interface IAppState {
    trades:ITrade[];
    stocks:IStock[];
    newTradeForm:INewTradeForm;
}
