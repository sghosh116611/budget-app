import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {

    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateValue = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateValue = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textValue = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateValue && endDateValue && textValue;
    }).sort((a, b) => {
        if (sortBy === "date")
            return a.createdAt < b.createdAt ? 1 : -1;
        else
        if (sortBy === "amount")
            return a.amount < b.amount ? 1 : -1;

    })
};