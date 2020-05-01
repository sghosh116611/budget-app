import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from "./AppRouter/Router";
import storeConfgure from "./store/storeConfigure";
import { login, logout } from "./actions/loginAction";
import LoadingPage from "./components/LoadingPage";
// import { addExpense, editExpense, removeExpense, startViewExpense } from "./actions/expensesAction";
// import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "./actions/filtersAction";
// import getVisibleExpenses from "./selectors/getVisibleExpenses";
import { startViewExpense } from "./actions/expensesAction";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from "./firebase/firebase";

const store = storeConfgure();

const jsx = ( <
    Provider store = { store } >
    <
    AppRouter / >
    <
    /Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render( < LoadingPage / > , document.getElementById("app"));



// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         console.log(user.uid);
//         store.dispatch(login(user.uid));
//         store.dispatch(startViewExpense()).then(() => {
//             renderApp();
//             if (history.location.pathname === "/") {
//                 history.push("/dashboard");
//             }
//         });

//     } else {
//         store.dispatch(logout());
//         renderApp();
//         history.push("/");
//     }
// });