import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';


const Header = () => ( <
    header >
    <
    h1 > Budget App < /h1> <
    NavLink to = "/"
    activeClassName = "is-active"
    exact > HOME < /NavLink> <
    NavLink to = "/create"
    activeClassName = "is-active" > CREATE ITEMS < /NavLink> <
    NavLink to = "/help"
    activeClassName = "is-active" > HELP < /NavLink> < /
    header >
);

export default Header;