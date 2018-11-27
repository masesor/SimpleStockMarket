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
import { IStockDetail } from '../../../models/stock';

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
  stockDetails:IStockDetail[];
}

export const StockDetailsTableView = (props:IProps) => (
  <Paper className={props.classes.root}>
    <Table className={props.classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Stock Symbol</TableCell>
          <TableCell>Stock Type</TableCell>
          <TableCell numeric={true}>Dividend Yield</TableCell>
          <TableCell numeric={true}>P/E Ratio</TableCell>
          <TableCell numeric={true}>Geometric Mean</TableCell>
          <TableCell numeric={true}>Stock Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.stockDetails.map((stockDetails, id) => {
          return (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {stockDetails.ticker}
              </TableCell>
              <TableCell>{stockDetails.stockType}</TableCell>
              <TableCell numeric={true}>{stockDetails.dividendYield}</TableCell>
              <TableCell numeric={true}>{stockDetails.peRatio}</TableCell>
              <TableCell numeric={true}>{stockDetails.geometricMean}</TableCell>
              <TableCell numeric={true}>{stockDetails.stockPrice}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>
);
