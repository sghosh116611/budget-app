import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/getVisibleExpenses";
import Item from "./Item";
import { Link } from "react-router-dom";

const ItemList = (props) => ( <
    div className = "content-container" > {
        props.expenses.length == 0 ?
        <
        div className = "page-header" >
        <
        div className = "content-container" >
        <
        h1 className = "page-header__title" > No items < /h1> </div >
        <
        /div> :  <
        div className = "page-header" >
        <
        div className = "content-container" > <
        h1 className = "page-header__title" > You are viewing { props.expenses.length + " " }
        items amounting to a total of Rs { props.expenses.reduce((total, expense) => total + parseInt(expense.amount, 10), 0) } < /h1> < /
        div >
        <
        /div>
    } { <
        div className = "content-container" >
            <
            div className = "page-header__actions" >
            <
            Link className = "button"
        to = "/create" > Add Expense < /Link>  <
        br / > <
            br / > <
            /
        div >
            <
            /div>

    } <
    div className = "list-header" >
    <
    div className = "show-for-mobile" > Expenses < /div> <
    div className = "show-for-desktop" > Expense < /div> <
    div className = "show-for-desktop" > Amount < /div> < /
    div >

    {
        props.expenses.map((expense) => {
            return <Item key = { expense.id } {...expense }
            />
        })
    } <
    /
    div >
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};


export default connect(mapStateToProps)(ItemList);