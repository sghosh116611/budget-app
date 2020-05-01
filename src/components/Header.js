import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { startLogout } from "../actions/loginAction";
import { connect } from "react-redux";

const Header = ({ startLogout }) => ( <
    header >
    <
    h1 > Budget App < /h1> <
    NavLink to = "/"
    activeClassName = "is-active"
    exact > HOME < /NavLink> <
    NavLink to = "/create"
    activeClassName = "is-active" > CREATE ITEMS < /NavLink>  <
    button onClick = { startLogout } > Logout < /button> < /
    header >
);

const mapDispatchToProp = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProp)(Header);