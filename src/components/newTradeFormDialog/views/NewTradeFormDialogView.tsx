import * as React from 'react';
import { WithStyles, Theme, createStyles, Dialog, DialogTitle } from '@material-ui/core';
import { WithWidth } from '@material-ui/core/withWidth';

import { NewTradeForm } from '../../../components/newTradeForm';

export const styles = (theme: Theme) => createStyles({
    
});

export interface IProps extends WithStyles<typeof styles>, WithWidth {
    isOpen:boolean;
}

export interface IDispatchProps {
}

export const NewTradeFormDialogView = (props:IProps & IDispatchProps) => (
    <Dialog open={props.isOpen}>
        <DialogTitle>Book a new trade</DialogTitle>
        <NewTradeForm />
    </Dialog>
);
