import * as React from 'react';
import { WithStyles, Theme, createStyles, TextField, Button, Grid } from '@material-ui/core';
import { WithWidth } from '@material-ui/core/withWidth';
import { Field, FormProps, FormErrors, InjectedFormProps } from 'redux-form';


import { INewTradeForm } from 'src/models/form';
import { Dispatch, AnyAction } from 'redux';

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
    updateFormField: (payload: { [id: string]: any }) => any;
}

export interface IDispatchProps {
    updateFormField:(payload:{ [id:string]:any }) => any;
    submitTrade:(tradeDetails:INewTradeForm) => any;
}

const renderInput = (field:any) => {
    const hasError = !!field.meta.error && !!field.meta.touched;

    return (
        <TextField
            placeholder={field.placeholder}
            value={field.value}
            error={hasError}
            type={field.type}
            onChange={field.input.onChange}
            helperText={hasError && field.meta.error}
        />
    );
};

const onSubmit = (tradeDetails:INewTradeForm, dispatch: Dispatch<AnyAction>, props:IProps & IDispatchProps) => {
    props.submitTrade(tradeDetails);
}

export const NewTradeFormView = (props:IProps & IDispatchProps) => (
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

            <Grid item xs={12}>
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
                <Button color="secondary" onClick={() => props.updateFormField({ isOpen: false })}>
                    Cancel
                 </Button>
                <Button color="primary" type="submit">
                    Submit
                </Button>
            </Grid>
        </Grid>
    </form>
);
