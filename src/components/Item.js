import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expensesAction";
import { Link } from "react-router-dom";
import moment from "moment";

const Item = ({ id, description, amount, createdAt }) => ( <
    div >
    <
    Link to = { `/edit/${id}` } >
    <
    h3 > { description } < /h3> < /
    Link > <
    p > Rs. { amount } - { moment(createdAt).format("Do MMM YYYY") } < /p>  < /
    div >
);

export default Item;