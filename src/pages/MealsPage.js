import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MealsActions } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Weekday from '../components/Weekday';
import Header from '../components/Header';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    },
    loading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        margin: '20px',
        color: 'black',
    },
    button1: {
        margin: '20px',
        fontFamily: 'Fugaz One',
    },
    button2: {
        margin: '20px',
        fontFamily: 'Fugaz One',
        backgroundColor: 'orange',
        color: 'white',

        '&:hover': {
            backgroundColor: 'black',
            color: 'white',
        },
    },
    root2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'column',
        textAlign: 'center',
    },
}));

function MealsPage() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const meals = useSelector((state) => state.Meals.meals);
    const loading = useSelector((state) => state.Meals.loading);

    useEffect(() => {
        dispatch(MealsActions.retrieveMeals());
    }, [dispatch]);

    const saveMeal = (saveValue) => {
        dispatch(MealsActions.saveMeals(saveValue, meals));
    };

    const logout = async (e) => {
        e.preventDefault();
        history.push('/');
    };

    return loading ? (
        <div className={classes.root1}>
            <CircularProgress
                variant="indeterminate"
                size={200}
                thickness={4}
                className={classes.loading}
            />
        </div>
    ) : (
        <div className={classes.root1}>
            <Header />
            {meals &&
                meals.map((value) => (
                    <Weekday meal={value} key={value.day} saveMeal={saveMeal} />
                ))}
            <div className={classes.root2}>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button1}
                    onClick={logout}
                >
                    Logout
                </Button>
            </div>
        </div>
    );
}

export default MealsPage;
