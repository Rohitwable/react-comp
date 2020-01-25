import React from 'react';
import './Person.css'
//ES5 function declaration
// function person (){

// }

// ES5 function expression
// const person = function(){

// }

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.clicked}>I am {props.name} and {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}
export default person;


