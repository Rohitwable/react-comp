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

class Person extends React.Component {
    componentDidMount() {
        // document.querySelector('input').focus();
        this.inputElement.focus();
    }
    render() {
        return (
            <React.Fragment>
                <p onClick={this.props.clicked}>I am {this.props.name} and {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                    ref={(inputEl) => { this.inputElement = inputEl }}
                />
            </React.Fragment>
        )
    }
}
Person.propTypes = {
    name: PropTypes.string.isRequired,
    click: PropTypes.func,
    age: PropTypes.string.isRequired,
    changed: PropTypes.func,
}
export default withClassHoc(Person, "Person");


