import React from 'react';
import './Person.css'
import withClassHoc from '../../hoc/withClassHoc';
import PropTypes from 'prop-types';
//ES5 function declaration
// function person (){

// }

// ES5 function expression
// const person = function(){

// }

const person = (props) => {
    return (
        <React.Fragment>
            <p onClick={props.clicked}>I am {props.name} and {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </React.Fragment>
    )
}
person.propTypes = {
    name: PropTypes.string.isRequired,
    click: PropTypes.func,
    age: PropTypes.string.isRequired,
    changed: PropTypes.func,
}
export default withClassHoc(person, "Person");


