import React, { Fragment } from 'react';
import './Cockpit.css';

const cockpit = (props) => {
    const style = {
        backgroundColor: "white",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor: "pointer",
    }
    const classes = [];
    if (props.persons.length <= 2) {
        classes.push('red');
    }
    if (props.persons.length <= 1) {
        classes.push('bold');
    }
    return (
        <Fragment>
            <p className={classes.join(' ')}>App component</p>
            <button style={style} onClick={props.clicked}>Switch name</button>
        </Fragment>
    )
}

export default cockpit;