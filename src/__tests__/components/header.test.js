import React from 'react';
import { Provider } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import configureStore from '../../redux/configureStore';

import Header from '../../components/Header';

const initialState = {};

const { store } = configureStore(initialState);

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

it('renders header and shows correctly', () => {
    act(() => {
        render(
            <Provider store={store}>
                <Header />
            </Provider>,
            container
        );
    });
    expect(container.textContent).toBe('Chessie Chow Chow');
});
