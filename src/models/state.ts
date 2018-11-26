import { ITrade, IStock } from './trade';

export interface IAppState {
    trades:ITrade[];
    stocks:IStock[];
}
