import React from 'react';
import { Provider } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
import configureStore from '../../redux/configureStore';
import { fireEvent, screen } from '@testing-library/react';

import Weekday from '../../components/Weekday';

const initialState = {};

const { store } = configureStore(initialState);

const weekdayMeals = {
    breakfast: '',
    lunch: '',
    dinner: '',
};

// https://reactjs.org/docs/testing-recipes.html#setup--teardown

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders weekday and shows correctly', () => {
    render(
        <Provider store={store}>
            <Weekday meal={weekdayMeals} />
        </Provider>,
        container
    );
    expect(container.textContent).toBe('Breakfast​Lunch​Dinner​EditSave');
});

it('saves weekday meal correctly', () => {
    const saveMeal = jest.fn();
    render(
        <Provider store={store}>
            <Weekday meal={weekdayMeals} saveMeal={saveMeal} />
        </Provider>,
        container
    );
    expect(container.textContent).toBe('Breakfast​Lunch​Dinner​EditSave');

    // edit button
    const editButton = screen.getByTestId('mealEdit');

    // save button
    const saveButton = screen.getByTestId('mealSave');

    // edit button should be enabled first
    expect(editButton).toBeEnabled();
    // save button should not be enabled until edit is clicked
    expect(saveButton).toHaveAttribute('disabled');
    expect(saveButton).toBeDisabled();

    // click the edit button to unlock the fields for input
    fireEvent.click(editButton);

    // edit button is clicked so now it should be disabled
    expect(editButton).toHaveAttribute('disabled');
    expect(editButton).toBeDisabled();
    // now that edit button is clicked save should be enabled
    expect(saveButton).toBeEnabled();

    // click the save button to lock the field for input
    fireEvent.click(saveButton);

    // edit button should now be disabled
    expect(editButton).toBeEnabled();
    // save button should not be enabled after it is clicked
    expect(saveButton).toHaveAttribute('disabled');
    expect(saveButton).toBeDisabled();

    // expect save meal to have been called
    expect(saveMeal).toHaveBeenCalledTimes(1);
});
