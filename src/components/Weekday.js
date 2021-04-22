import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    meals: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    field: {
        margin: '20px',
        fontFamily: 'Fugaz One',
    },
    wrapper: {
        width: '90%',
        maxWidth: '375px',
    },
    button: {
        margin: '20px',
        fontFamily: 'Fugaz One',
        backgroundColor: 'orange',
        color: 'white',

        '&:hover': {
            backgroundColor: 'black',
            color: 'white',
        },
    },
    heading: {
        fontFamily: 'Fugaz One',
    },
}));

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

function Weekday(props) {
    const classes = useStyles();
    const [breakfast, setBreakfast] = useState(props.meal.breakfast);
    const [lunch, setLunch] = useState(props.meal.lunch);
    const [dinner, setDinner] = useState(props.meal.dinner);
    const [edit, setEdit] = useState(false);
    const [fieldInput, setFieldInput] = useState({
        readOnly: true,
    });

    const handleBreakfast = (event) => {
        // event.preventDefault();
        setBreakfast(event.target.value);
    };

    const handleLunch = (event) => {
        setLunch(event.target.value);
    };

    const handleDinner = (event) => {
        setDinner(event.target.value);
    };

    const handleEdit = (e) => {
        e.preventDefault();
        setEdit(!edit);
        setFieldInput({
            readOnly: false,
        });
    };

    const handleSave = (e) => {
        e.preventDefault();
        setEdit(!edit);
        setFieldInput({
            readOnly: true,
        });
        const saveValue = {
            day: props.meal.day,
            breakfast: breakfast,
            lunch: lunch,
            dinner: dinner,
        };
        props.saveMeal(saveValue);
    };

    return (
        <Accordion className={classes.wrapper}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    {days[parseInt(props.meal.day)]}
                </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.meals}>
                {props.meal && (
                    <>
                        <Typography className={classes.heading}>
                            Breakfast
                        </Typography>
                        <TextField
                            multiline
                            rowsMax={4}
                            value={breakfast}
                            variant="outlined"
                            InputProps={fieldInput}
                            onChange={handleBreakfast}
                            className={classes.field}
                        />
                        <Typography className={classes.heading}>
                            Lunch
                        </Typography>
                        <TextField
                            multiline
                            rowsMax={4}
                            value={lunch}
                            variant="outlined"
                            InputProps={fieldInput}
                            onChange={handleLunch}
                            className={classes.field}
                        />
                        <Typography className={classes.heading}>
                            Dinner
                        </Typography>
                        <TextField
                            multiline
                            rowsMax={4}
                            value={dinner}
                            variant="outlined"
                            InputProps={fieldInput}
                            onChange={handleDinner}
                            className={classes.field}
                        />
                    </>
                )}
            </AccordionDetails>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleEdit}
                disabled={edit}
                data-testid="mealEdit"
            >
                Edit
            </Button>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={!edit}
                onClick={handleSave}
                data-testid="mealSave"
            >
                Save
            </Button>
        </Accordion>
    );
}

export default Weekday;
