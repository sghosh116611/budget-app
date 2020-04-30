const expensesDefaultState = [];
export default (state = expensesDefaultState, action) => {
    //console.log(state);
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ]
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => action.id !== id);
        case "VIEW_EXPENSE":
            return action.expense
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });
        default:
            return state;
    }
};