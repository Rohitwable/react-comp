import React from 'react';
//ES5 function declaration
// function person (){

// }

// ES5 function expression
// const person = function(){

// }

const person = (props) => {
    return (
        <div>
            <p onClick={props.clicked}>I am {props.name} and {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    )
}
export default person;


