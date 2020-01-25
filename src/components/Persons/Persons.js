import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    console.log("person.js render");
    return props.persons.map((value, index) =>
        <Person
            key={index}
            name={value.name}
            age={value.age}
            clicked={() => props.clicked(index)}
            changed={(event) => props.changed(event, value.id)} />
    );
};

export default persons;