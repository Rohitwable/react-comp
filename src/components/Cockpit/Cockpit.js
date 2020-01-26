import React, { Fragment, useEffect, useRef } from 'react';
import './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const btnToggleRef = useRef(null);
    useEffect(() => {
        console.log('cockpit.js useeffect');
        btnToggleRef.current.click();
        //http request

        //it will alert if we does not remove cockpit / if we remove then timeout will never alert / the component cleanup takes place
        const timer = setTimeout(() => {
            alert('saved data');
        }, 1000);
        //it'll execute every time if we ignore second argument
        //if we use empty array then it renders for very first time only
        //for componentDidMount() use with empty array
        return () => {
            clearTimeout(timer);
            console.log("cockpit.js cleanup");
        }
    }, [props.persons]);
    const style = {
        backgroundColor: "white",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor: "pointer",
    }
    const classes = [];
    if (props.personsLength <= 2) {
        classes.push('red');
    }
    if (props.personsLength <= 1) {
        classes.push('bold');
    }
    return (
        <Fragment>
            <p className={classes.join(' ')}>App component</p>
            <button ref={btnToggleRef} style={style} onClick={props.clicked}>Switch name</button>
            <AuthContext.Consumer>
                {context => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>
        </Fragment>
    )
}

export default React.memo(Cockpit);