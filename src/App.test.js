import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import App from './App';
import configureStore from './redux/configureStore';

const initialState = {};

const { store } = configureStore(initialState);

test('renders App', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const titleElement = screen.getByText('Chessie Chow Chow');
    expect(titleElement).toBeInTheDocument();
});
