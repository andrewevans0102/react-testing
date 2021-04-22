import { MealsActionTypes } from '../actionTypes';

const initialMeals = [
    {
        day: '0',
        breakfast: '',
        lunch: '',
        dinner: '',
    },
    {
        day: '1',
        breakfast: '',
        lunch: '',
        dinner: '',
    },
    {
        day: '2',
        breakfast: '',
        lunch: '',
        dinner: '',
    },
    {
        day: '3',
        breakfast: '',
        lunch: '',
        dinner: '',
    },
    {
        day: '4',
        breakfast: '',
        lunch: '',
        dinner: '',
    },
    {
        day: '5',
        breakfast: '',
        lunch: '',
        dinner: '',
    },
    {
        day: '6',
        breakfast: '',
        lunch: '',
        dinner: '',
    },
];

export function getMeals() {
    return { type: MealsActionTypes.GET_MEALS };
}

export function setMeals(mealsResponse) {
    return { type: MealsActionTypes.SET_MEALS, mealsResponse };
}

export function savingMeals(meals) {
    return { type: MealsActionTypes.SAVE_MEALS, meals };
}

export function saveMealsSuccess(meals) {
    return { type: MealsActionTypes.SAVE_MEALS_SUCCESS, meals };
}

export function mealsError(error) {
    return { type: MealsActionTypes.MEALS_ERROR, error };
}

export function saveMeals(saveMeal, totalMeals) {
    return async function (dispatch) {
        try {
            // first call get about to clear values
            dispatch(savingMeals());

            // force a small delay just to show loading
            await sleep(1000);

            let index = totalMeals.findIndex(
                (value) => value.day === saveMeal.day
            );
            if (index !== -1) {
                totalMeals[index] = saveMeal;
            }

            localStorage.setItem('meals', JSON.stringify(totalMeals));

            return dispatch(saveMealsSuccess(totalMeals));
        } catch (error) {
            console.log(error);
            return dispatch(mealsError(error));
        }
    };
}

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export function retrieveMeals() {
    return async function (dispatch) {
        try {
            dispatch(getMeals());

            // force a small delay just to show loading
            await sleep(1000);

            let localMeals = localStorage.getItem('meals');
            let meals = [];
            if (localMeals === null) {
                meals = initialMeals;
            } else {
                meals = JSON.parse(localMeals);
            }

            return dispatch(setMeals(meals));
        } catch (error) {
            console.log(error);
            return dispatch(mealsError(error));
        }
    };
}
