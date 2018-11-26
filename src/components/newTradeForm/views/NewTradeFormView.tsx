import * as React from 'react';

import { Button, WithStyles, Theme, createStyles, Dialog, DialogTitle, DialogActions, TextField } from '@material-ui/core';
import { WithWidth } from '@material-ui/core/withWidth';

export const styles = (theme: Theme) => createStyles({
    textField: {
        width: '80%',
        margin: 20
    }
});

export interface IProps extends WithStyles<typeof styles>, WithWidth {
    isOpen:boolean;
}

export interface IDispatchProps {
    updateFormField:(payload:{ [id:string]:any }) => any;
}

export const NewTradeFormView = (props:IProps & IDispatchProps) => (
    <Dialog open={props.isOpen}>
        <DialogTitle>Book a new trade</DialogTitle>
        <TextField
            id="trade-symbol"
            value={''}
            onChange={() => undefined}
            className={props.classes.textField}
        />
        <DialogActions>
            <Button color="secondary" onClick={() => props.updateFormField( { isOpen: false })}>
                Cancel
            </Button>
            <Button color="primary" onClick={() => undefined}>
                Submit
            </Button>
        </DialogActions>
    </Dialog>
);
