import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { startLogout } from "../actions/loginAction";
import { connect } from "react-redux";

const Header = ({ startLogout }) => ( <
    header className = "header" >
    <
    div className = "content-container" >
    <
    div className = "header__content" >
    <
    Link className = "header__title"
    to = "/dashboard" >
    <
    h1 > Budget App < /h1> < /
    Link > <
    button onClick = { startLogout }
    className = "button button--link" > Logout < /button> < /
    div > <
    /div> < /
    header >
);
const mapDispatchToProp = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProp)(Header);