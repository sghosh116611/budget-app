import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import AppRouter from "./AppRouter/Router";
import storeConfgure from "./store/storeConfigure";
// import { addExpense, editExpense, removeExpense } from "./actions/expensesAction";
// import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "./actions/filtersAction";
// import getVisibleExpenses from "./selectors/getVisibleExpenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = storeConfgure();

const jsx = ( <
    Provider store = { store } >
    <
    AppRouter / >
    <
    /Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));