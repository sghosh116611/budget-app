import React from 'react';
import { connect } from "react-redux";
import { startLogin } from "../actions/loginAction";

const LoginPage = ({ startLogin }) => ( <
    div >
    <
    button onClick = { startLogin } > Login with Google < /button>  < /
    div >
);

const mapDispatchToProp = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProp)(LoginPage);