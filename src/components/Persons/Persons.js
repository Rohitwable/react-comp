import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((value, index) => {
    return <Person
        name={value.name}
        age={value.age}
        clicked={() => props.clicked(index)}
        changed={(event) => props.changed(event, value.id)} />
});

export default persons;