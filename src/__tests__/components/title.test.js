import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Title from '../../components/Title';

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

it('renders title and shows correctly', () => {
    act(() => {
        render(<Title />, container);
    });
    expect(container.textContent).toBe('Chessie Chow Chow');
});
