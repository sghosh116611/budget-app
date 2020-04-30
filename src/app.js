import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import AppRouter from "./AppRouter/Router";
import storeConfgure from "./store/storeConfigure";
// import { addExpense, editExpense, removeExpense } from "./actions/expensesAction";
// import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "./actions/filtersAction";
// import getVisibleExpenses from "./selectors/getVisibleExpenses";
import { startViewExpense } from "./actions/expensesAction";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "./firebase/firebase";

const store = storeConfgure();

console.log("testing");

const jsx = ( <
    Provider store = { store } >
    <
    AppRouter / >
    <
    /Provider>
);

ReactDOM.render( < p > Loading < /p>,document.getElementById("app"));

        store.dispatch(startViewExpense()).then(() => {
            ReactDOM.render(jsx, document.getElementById('app'));
        });