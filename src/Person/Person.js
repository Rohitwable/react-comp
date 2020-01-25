import React from 'react';
//ES5 function declaration
// function person (){

// }

// ES5 function expression
// const person = function(){

// }

const person = () => {
    return <p>I am {Math.floor(Math.random() * 30)} years old.</p>
}
export default person;


