import * as React from 'react';

import './HomePageView.css';
import { TradeTable } from 'src/components/tradeTable';
import { Grid, Button, WithStyles, Theme, createStyles } from '@material-ui/core';
import { isSmartphone } from 'src/responsive';
import { WithWidth } from '@material-ui/core/withWidth';

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

export const HomePageView = (props: IProps) => (
    <Grid
        container
        className={isSmartphone(props.width) ? props.classes.mobileRoot : props.classes.root}
        alignItems={'flex-start'}
        justify={'flex-start'}
    >
        {/*   <TodoDialog
          actions={actions}
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
        /> */}
        <Grid item xs={12}>
            <Button
                className={props.classes.button}
                variant="contained"
                color="secondary"
                onClick={() => undefined}>
                Book Trade
        </Button>
        </Grid>
        <Grid item xs={12}>
            <TradeTable />
        </Grid>
    </Grid>
);
