import React from 'react';
import '../styles/styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: '100%',
        maxWidth: '375px',
    },
    button: {
        margin: '20px',
        fontSize: '20px',
        width: '200px',
        fontFamily: 'Fugaz One',
        backgroundColor: 'orange',
        color: 'white',

        '&:hover': {
            backgroundColor: 'black',
            color: 'white',
        },
    },
}));

function HomePage(props) {
    const classes = useStyles();
    const history = useHistory();

    const goToMealsPage = (e) => {
        e.preventDefault();
        history.push('/meals');
    };

    return (
        <Container component="main" maxWidth="lg">
            <div className={classes.paper}>
                <Header />
                <Avatar
                    src={'./HomePage.jpg'}
                    alt="Home Page"
                    className={classes.image}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={goToMealsPage}
                >
                    Login
                </Button>
            </div>
        </Container>
    );
}

export default HomePage;
