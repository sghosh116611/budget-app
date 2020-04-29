import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expensesAction";
import { Link } from "react-router-dom";

const Item = ({ id, description, amount, createdAt }) => ( <
    div >
    <
    Link to = { `/edit/${id}` } >
    <
    h3 > { description } < /h3> < /
    Link > <
    p > { amount } - { createdAt } < /p>  < /
    div >
);

export default Item;