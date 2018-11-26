import * as React from 'react';

import './HomePageView.css';

export interface IProps {
    value:string;
}

export const HomePageView = (props:IProps) => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Welcome {props.value}</h1>
        </header>
    </div>
);
