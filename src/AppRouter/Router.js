import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Header from "../components/Header";
import DashboardPage from "../components/DashboardPage";
import CreateItemPage from "../components/CreateItemPage";
import EditItemPage from "../components/EditItemPage";
import HelpPage from "../components/HelpPage";
import ErrorPage from "../components/ErrorPage";


const AppRouter = () => ( <
    BrowserRouter >
    <
    div >
    <
    Header / >
    <
    Switch >
    <
    Route exact path = "/"
    component = { DashboardPage }
    />  <
    Route path = "/create"
    component = { CreateItemPage }
    />  <
    Route path = "/edit/:id"
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
    /BrowserRouter>
);

export default AppRouter;