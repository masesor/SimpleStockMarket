import { ITrade } from './trade';
import { IStock } from './stock';

export interface IAppState {
  trades:ITrade[];
  stocks:IStock[];
  isNewTradeFormOpen:boolean;
  form:any;
}
