export const GET_MEALS = 'meals/GET_MEALS';
export const SET_MEALS = 'meals/SET_MEALS';
export const CREATE_MEALS = 'meals/CREATE_MEALS';
export const CREATE_MEALS_SUCCESS = 'meals/CREATE_MEALS_SUCCESS';
export const SAVE_MEALS = 'meals/SAVE_MEALS';
export const SAVE_MEALS_SUCCESS = 'meals/SAVE_MEALS_SUCCESS';
export const MEALS_ERROR = 'meals/MEALS_ERROR';

export const initialMealsState = {
    meals: [],
    errors: [],
    loading: false,
};
