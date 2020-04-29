import { createStore, combineReducers } from "redux";
import { v1 as uuidv1 } from 'uuid';

// Default States

const expensesDefaultState = [];
const filterDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};
const totalAmountDefaultState = 0;

// Expenses Actions

const addExpense = ({
    description = "",
    note = "",
    amount = 0,
    createdAt = 0
} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuidv1(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

// Expenses Reducer

const expensesReducer = (state = expensesDefaultState, action) => {
    //console.log(state);
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ]
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => action.id !== id);
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...state,
                        ...action.updates
                    };
                } else
                    return state;
            });
        default:
            return state;
    }
};


// Filters Action
const setTextFilter = (text = "") => ({
    type: "SET_TEXT",
    text
});

const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});

const sortByDate = () => ({
    type: "SORT_BY_DATE"
});

const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
});

const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
});

// Filters Reducer

const filtersReducer = (state = filterDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT":
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

// Total Amount Action
const calculateTotal = ({ expense }) => ({
    type: "TOTAL_AMOUNT",
    expense
});
//Total Amount Reducer

const totalAmountReducer = (state = totalAmountDefaultState, action) => {
    switch (action.type) {
        case "TOTAL_AMOUNT":
            var sum = 0;
            sum += action.amount;
            return sum;
        default:
            return state;
    }
};

// Store Creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);


const getVisibleItems = (expenses, { text, sortBy, startDate, endDate }) => {

    return expenses.filter((expense) => {
        const startDateValue = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateValue = typeof endDate !== "number" || expense.createdAt <= endDate;;
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

store.subscribe(() => {
    const state = store.getState();
    const getVisible = getVisibleItems(state.expenses, state.filters);
    console.log(getVisible);
});

const ItemOne = store.dispatch(addExpense({ description: "Gas Bill", amount: 999, createdAt: 500 }));
const ItemTwo = store.dispatch(addExpense({ description: "Water Bill", amount: 10000, createdAt: 1000 }));

// store.dispatch(removeExpense({ id: ItemOne.expense.id }))

// store.dispatch(editExpense(ItemTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('Bill'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(100));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(900));

// Dummy State
const dummyState = {
    expenses: [{
        id: "dsslkad7238",
        decription: "This is the descroption of the amount",
        note: "This is the note of the expense!",
        amount: 54000,
        createdAt: 0
    }],

    filters: {
        text: "rent",
        sortBy: "amount", // amount || date,
        startDate: undefined,
        endDate: undefined
    },

    totalAmount: 0
};