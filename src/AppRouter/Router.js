import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from "history/createBrowserHistory";
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import Header from "../components/Header";
import DashboardPage from "../components/DashboardPage";
import CreateItemPage from "../components/CreateItemPage";
import EditItemPage from "../components/EditItemPage";
import HelpPage from "../components/HelpPage";
import ErrorPage from "../components/ErrorPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute.js";

export const history = createHistory();

const AppRouter = () => ( <
    Router history = { history } >
    <
    div >
    <
    Switch >
    <
    PublicRoute path = "/"
    component = { LoginPage }
    exact = { true }
    />  <
    PrivateRoute path = "/dashboard"
    component = { DashboardPage }
    />  <
    PrivateRoute path = "/create"
    component = { CreateItemPage }
    />  <
    PrivateRoute path = "/edit/:id"
    component = { EditItemPage }
    /> <
    Route path = "/help"
    component = { HelpPage }
    /> <
    Route component = { ErrorPage }
    / > < /
    Switch >
    <
    /div>

    <
    /Router>
);

export default AppRouter;