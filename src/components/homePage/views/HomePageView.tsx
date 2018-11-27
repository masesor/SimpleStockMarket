import * as React from 'react';
import { WithWidth } from '@material-ui/core/withWidth';
import { Grid, Button, WithStyles, Theme, createStyles } from '@material-ui/core';

import { TradeTable } from '../../../components/tradeTable';
import { isSmartphone } from '../../../responsive';
import { NewTradeFormDialog } from '../../../components/newTradeFormDialog';
import { StockDetailsTable } from '../../../components/stockDetailsTable';

export const styles = (theme:Theme) => createStyles({
  root: {
    padding: theme.spacing.unit * 10,
  },

  mobileRoot: {
    paddingTop: 50,
    paddingLeft: 15,
    paddingRight: 15,
  },

  button: {
    marginBottom: 15,
  },
});

export interface IProps extends WithStyles<typeof styles>, WithWidth {
}

export interface IDispatchProps {
  toggleNewTradeFormDialog:() => any;
}

export const HomePageView = (props:IProps & IDispatchProps) => (
  <Grid
    container={true}
    className={isSmartphone(props.width) ? props.classes.mobileRoot : props.classes.root}
    alignItems={'flex-start'}
    justify={'flex-start'}
    spacing={40}
  >
    <NewTradeFormDialog />
    <Grid item={true} xs={12}>
      <Button
        className={props.classes.button}
        variant="contained"
        color="secondary"
        onClick={() => props.toggleNewTradeFormDialog()}
      >
        Book Trade
      </Button>
    </Grid>
    <Grid item={true} xs={12}>
      <TradeTable />
    </Grid>
    <Grid item={true} xs={12}>
      <StockDetailsTable />
    </Grid>
  </Grid>
);
