import React from 'react';
import './Person.css'
import withClassHoc from '../../hoc/withClassHoc';
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
export default withClassHoc(person, "Person");


