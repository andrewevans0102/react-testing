import { MealsActionTypes } from '../actionTypes';

function Meals(state = MealsActionTypes.initialMealsState, action) {
    switch (action.type) {
        case MealsActionTypes.GET_MEALS:
            return Object.assign({}, state, {
                loading: true,
                meals: [],
            });
        case MealsActionTypes.SET_MEALS:
            return Object.assign({}, state, {
                ...state,
                loading: false,
                meals: action.mealsResponse,
            });
        case MealsActionTypes.SAVE_MEALS:
            return Object.assign({}, state, {
                loading: true,
                meals: [],
            });
        case MealsActionTypes.SAVE_MEALS_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                loading: false,
                meals: action.meals,
            });
        case MealsActionTypes.MEALS_ERROR:
            return Object.assign({}, state, {
                ...state,
                loading: false,
                errors: [...state.errors, action.error],
            });
        default:
            return state;
    }
}

export default Meals;
