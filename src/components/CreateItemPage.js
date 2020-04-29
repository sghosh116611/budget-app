import React from 'react';
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from '../actions/expensesAction';

const CreateItemPage = (props) => ( <
    div >
    <
    ExpenseForm onSubmit = {
        (expense) => {
            console.log(expense);
            props.dispatch(addExpense(expense));
            props.history.push("/");
        }
    }
    / > < /
    div >
);

export default connect()(CreateItemPage);