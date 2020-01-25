import React, { Fragment, useEffect } from 'react';
import './Cockpit.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('cockpit.js useeffect');
        //http request

        setTimeout(() => {
            alert('saved data');
        }, 1000);
        //it'll execute every time if we ignore second argument
        //if we use empty array then it renders for very first time only
        //for componentDidMount() use with empty array
    }, [props.persons]);
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

export default Cockpit;