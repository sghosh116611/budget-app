import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expensesAction";
import { Link } from "react-router-dom";
import moment from "moment";

const Item = ({ id, description, amount, createdAt }) => ( <
    div >
    <
    Link className = "list-item"
    to = { `/edit/${id}` } >
    <
    div >
    <
    h3 className = "list-item__title" > { description } < /h3>   <
    span className = "list-item__sub-title" > { moment(createdAt).format("Do MMM YYYY") } < /span> < /
    div >
    <
    h3 className = "list-item__data" > Rs. { amount } < /h3> < /
    Link > < /
    div >
);

export default Item;