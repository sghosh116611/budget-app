import { v1 as uuidv1 } from 'uuid';
import database from "../firebase/firebase"

export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        console.log(uid);
        const {
            description = '',
                note = '',
                amount = 0,
                createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        return database.ref(`/users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

export const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`/users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`/users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

export const viewExpenses = (expense) => ({
    type: "VIEW_EXPENSE",
    expense
});

export const startViewExpense = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`/users/${uid}/expenses`).once("value").then((snapShot) => {
            const expenses = [];

            snapShot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(viewExpenses(expenses));
        });
    };
};