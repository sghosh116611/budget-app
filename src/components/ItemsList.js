import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/getVisibleExpenses";
import Item from "./Item";

const ItemList = (props) => ( <
    div > {
        props.expenses.length == 0 ?
        <
        h1 > No items < /h1> : <
        h1 > You are viewing { props.expenses.length + " " }
        items amounting to a total of Rs { props.expenses.reduce((total, expense) => total + parseInt(expense.amount, 10), 0) } < /h1>
    } {
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