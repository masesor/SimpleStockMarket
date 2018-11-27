
import * as React from 'react';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  WithStyles,
  createStyles,
  Theme
} from '@material-ui/core';
import { WithWidth } from '@material-ui/core/withWidth';

import { ITrade } from '../../../models/trade';
import { formatDateAsString } from '../../../utils/formatters';

export const styles = (theme:Theme) => createStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

export interface IProps extends WithStyles<typeof styles>, WithWidth {
  trades:ITrade[];
}

export const TradeTableView = (props:IProps) => (
  <Paper className={props.classes.root}>
    <Table className={props.classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Stock Symbol</TableCell>
          <TableCell>Buy / Sell</TableCell>
          <TableCell numeric={true}>Trade Price (£)</TableCell>
          <TableCell>Trade Date</TableCell>
          <TableCell numeric={true}>Quantity</TableCell>
          <TableCell numeric={true}>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.trades.map((trade) => {
          return (
            <TableRow key={trade.id}>
              <TableCell component="th" scope="row">
                {trade.ticker}
              </TableCell>
              <TableCell>{trade.buySellInd}</TableCell>
              <TableCell numeric={true}>{trade.tradePrice}</TableCell>
              <TableCell>{formatDateAsString(trade.tradeDate)}</TableCell>
              <TableCell numeric={true}>{trade.quantity}</TableCell>
              <TableCell numeric={true}>{trade.tradeValue}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>
);
