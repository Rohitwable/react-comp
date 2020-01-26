import React from 'react';
import './Person.css'
import withClassHoc from '../../../hoc/withClassHoc';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';
//ES5 function declaration
// function person (){

// }

// ES5 function expression
// const person = function(){

// }

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        // document.querySelector('input').focus();
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }
    render() {
        return (
            <React.Fragment>
                <AuthContext.Consumer>
                    {context => context.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>}
                </AuthContext.Consumer>
                <p onClick={this.props.clicked}>I am {this.props.name} and {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                    // ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElementRef}
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


