import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MealsPage from './pages/MealsPage';
import './styles/styles.scss';

export default function App() {
    return (
        <Router>
            <section>
                <Switch>
                    <Route path="/meals">
                        <MealsPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </section>
        </Router>
    );
}
