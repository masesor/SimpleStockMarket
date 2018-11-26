import * as React from 'react';
import { WithStyles, Theme, createStyles, Dialog, DialogTitle } from '@material-ui/core';
import { WithWidth } from '@material-ui/core/withWidth';

import { NewTradeForm } from 'src/components/newTradeForm';

export const styles = (theme: Theme) => createStyles({
    
});

export interface IProps extends WithStyles<typeof styles>, WithWidth {
    isOpen:boolean;
}

export interface IDispatchProps {
    updateFormField:(payload:{ [id:string]:any }) => any;
}

export const NewTradeFormDialogView = (props:IProps & IDispatchProps) => (
    <Dialog open={props.isOpen}>
        <DialogTitle>Book a new trade</DialogTitle>
        <NewTradeForm />
    </Dialog>
);
