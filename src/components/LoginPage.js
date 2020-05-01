import React from 'react';
import { connect } from "react-redux";
import { startLogin } from "../actions/loginAction";

const LoginPage = ({ startLogin }) => ( <
    div className = "box-layout" >
    <
    div className = "box-layout__box" >
    <
    p className = "box-layout__title" > Budget App < /p> <
    button className = "button"
    onClick = { startLogin } > Login with Google < /button>  < /
    div > <
    /
    div >
);

const mapDispatchToProp = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProp)(LoginPage);