import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextProps.persons !== this.props.persons) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    render() {
        console.log("person.js render");
        return this.props.persons.map((value, index) =>
            <Person
                key={index}
                name={value.name}
                age={value.age}
                clicked={() => this.props.clicked(index)}
                isAuth={this.props.isAuthenticated}
                changed={(event) => this.props.changed(event, value.id)} />

        );
    }
};

export default Persons;