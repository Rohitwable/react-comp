import React from 'react';
//ES5 function declaration
// function person (){

// }

// ES5 function expression
// const person = function(){

// }

const person = (props) => {
    return <p>I am {props.name} and {props.age} years old.</p>
}
export default person;


