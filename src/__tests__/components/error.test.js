import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { default as ErrorComponent } from '../../components/Error';

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

it('renders without error values', () => {
    act(() => {
        render(<ErrorComponent error={[]} />, container);
    });
    expect(container.textContent).toBe('');
});

it('renders with error values', () => {
    const firstError = new Error('First Error');
    const secondError = new Error('Second Error');
    const thirdError = new Error('Third Error');
    const fourthError = new Error('Fourth Error');

    const errors = [firstError, secondError, thirdError, fourthError];

    act(() => {
        render(<ErrorComponent error={errors} />, container);
    });
    expect(container.textContent).toBe(
        'First ErrorSecond ErrorThird ErrorFourth Error'
    );
});
