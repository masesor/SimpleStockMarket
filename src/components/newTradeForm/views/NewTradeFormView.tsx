import * as React from 'react';
import { Dispatch, AnyAction } from 'redux';
import { WithStyles, Theme, createStyles, TextField, Button, Grid, Select, MenuItem } from '@material-ui/core';
import { WithWidth } from '@material-ui/core/withWidth';
import { Field, FormProps, FormErrors, InjectedFormProps } from 'redux-form';

import { INewTradeForm } from 'src/models/form';

export const styles = (theme: Theme) => createStyles({
    textField: {
        width: '80%',
        margin: 20
    }
});

export interface IProps extends
    WithStyles<typeof styles>,
    WithWidth,
    FormProps<INewTradeForm, {}, {}>,
    InjectedFormProps<INewTradeForm> {
    isOpen: boolean;
    onSubmit: (values: INewTradeForm, dispatch: Dispatch<AnyAction>, props: IProps) => void | FormErrors<FormData> | Promise<any>;
    toggleNewTradeFormDialog: () => any;
}

export interface IDispatchProps {
    submitTrade: (tradeDetails: INewTradeForm) => any;
}

const renderInput = (field: any) => {
    const hasError = !!field.meta.error && !!field.meta.touched;

    return (
        <TextField
            placeholder={field.placeholder}
            value={field.input.value}
            error={hasError}
            type={field.type}
            onChange={field.input.onChange}
            helperText={hasError && field.meta.error}
        />
    );
};

const renderSelect = (field: any) => {
    return (
        <Select
            value={field.input.value}
            onChange={field.input.onChange}
            inputProps={{
                name: 'buySellInd',
                id: 'buySellInd',
            }}
        >
            <MenuItem value={'B'}>Buy</MenuItem>
            <MenuItem value={'S'}>Sell</MenuItem>
        </Select>
    );
};

const onSubmit = (tradeDetails: INewTradeForm, dispatch: Dispatch<AnyAction>, props: IProps & IDispatchProps) => {
    props.submitTrade(tradeDetails);
};

export const NewTradeFormView = (props: IProps & IDispatchProps) => (
    <form onSubmit={props.handleSubmit(onSubmit)}>
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            spacing={16}
        >
            <Grid item xs={12}>
                <Field
                    name="ticker"
                    component={renderInput}
                    placeholder="Stock symbol"
                    type="text"
                />
            </Grid>

            <Grid item={true} xs={12}>
                <Field
                    name="buySellInd"
                    component={renderSelect}
                    placeholder="Buy / Sell"
                    type="select"
                />
            </Grid>

            <Grid item={true} xs={12}>
                <Field
                    name="tradePrice"
                    component={renderInput}
                    placeholder="Trade price"
                    type="text"
                />
            </Grid>

            <Grid item xs={12}>
                <Field
                    name="quantity"
                    component={renderInput}
                    placeholder="Quantity"
                    type="number"
                />
            </Grid>

            <Grid item xs={12}>
                <Button color="secondary" onClick={() => props.toggleNewTradeFormDialog()}>
                    Cancel
                 </Button>
                <Button color="primary" type="submit">
                    Submit
                </Button>
            </Grid>
        </Grid>
    </form>
);
