import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

const now = moment();

export default class ExpenseForm extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                description: props.expense ? props.expense.description : '',
                note: props.expense ? props.expense.note : '',
                amount: props.expense ? props.expense.amount : '',
                createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
                calendarFocused: false,
                error: ''
            };
        }

        onDescriptionChange = (e) => {
            const description = e.target.value;
            this.setState(() => ({ description }));
        };

        onNotesChange = (e) => {
            const note = e.target.value;
            this.setState(() => ({ note }));
        };

        onAmountChange = (e) => {
            const amount = e.target.value;
            if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
                this.setState(() => ({ amount }));
            }
        };

        onDateChange = (createdAt) => {
            if (createdAt)
                this.setState(() => ({ createdAt }));
        };
        onFocusChange = ({ focused }) => {
            this.setState(() => ({ calendarFocused: focused }));
        };

        onSubmit = (e) => {
            e.preventDefault();

            if (!this.state.description || !this.state.amount)
                this.setState(() => ({ error: "Please enter a description or amount!!!!" }));
            else {
                this.setState(() => ({ error: "" }));
                this.props.onSubmit({
                    description: this.state.description,
                    note: this.state.note,
                    amount: this.state.amount,
                    createdAt: this.state.createdAt.valueOf()
                });
            }

        };

        render() {
            return ( < form className = "form"
                onSubmit = { this.onSubmit } > {
                    this.state.error && < p className = "form__error" > { this.state.error } < /p>} <
                    input type = "text"
                    className = "text-input"
                    placeholder = "description"
                    value = { this.state.description }
                    onChange = { this.onDescriptionChange }
                    autoFocus /
                    >
                    <
                    input type = "text"
                    className = "text-input"
                    placeholder = "amount"
                    value = { this.state.amount }
                    onChange = { this.onAmountChange }
                    / >   <
                    SingleDatePicker date = { this.state.createdAt }
                    onDateChange = { this.onDateChange }
                    focused = { this.state.calendarFocused }
                    onFocusChange = { this.onFocusChange }
                    numberOfMonths = { 1 }
                    isOutsideRange = {
                        () => false
                    }
                    /> <
                    textarea placeholder = "Enter the notes (optional)"
                    className = "textarea"
                    value = { this.state.value }
                    onChange = { this.onNotesChange } >
                    <
                    /textarea>  <
                    button className = "button" > Add Expense < /button> < /
                    form >
                )
            }
        }