import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filtersAction";
import { DateRangePicker } from "react-dates";

class FilterExpense extends React.Component {
    state = {
        calendarFocused: null
    };

    onDateChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    render() {
        return ( <
            div >
            <
            input type = "text"
            placeholder = "Enter the searched text"
            value = { this.props.filters.text }
            onChange = {
                (e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }
            }
            />  <
            select value = { this.props.filters.sortBy }
            onChange = {
                (e) => {
                    if (e.target.value === "amount")
                        this.props.dispatch(sortByAmount());
                    else
                    if (e.target.value === "date")
                        this.props.dispatch(sortByDate());
                }
            } >
            <
            option value = "date" > Date < /option> <
            option value = "amount" > Amount < /option> < /
            select >
            <
            DateRangePicker startDate = { this.props.filters.startDate }
            endDate = { this.props.filters.endDate }
            onDatesChange = { this.onDateChange }
            focusedInput = { this.state.calendarFocused }
            onFocusChange = { this.onFocusChange }
            numberOfMonths = { 1 }
            isOutsideRange = {
                () => false
            }
            / > < /
            div >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(FilterExpense);