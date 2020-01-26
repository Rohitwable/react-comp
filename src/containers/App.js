import React from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';

class App extends React.Component {
  // return React.createElement('div', { className: "App" }, React.createElement('h1', null, "First React app"));
  constructor(props) {
    super(props);
    console.log("app.js constructor");
    this.state = {
      persons: [
        { id: '1', name: "person1", age: "20" },
        { id: '2', name: "person2", age: "23" },
        { id: '3', name: "person3", age: "44" },
      ],
      untouched: "this will not effect",
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false,
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("app.js getDerivedStateFromprops", props);
    return state;
  }

  componentDidMount() {
    console.log("app.js componentDidMount")
  }

  componentWillUnmount() {
    console.log('app.js componentWillUnmount');
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "33" },
        { name: "person1", age: "20" },
        { name: "person2", age: "23" },
        { name: "person3", age: "44" },
      ]
    })
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((value) => {
      return value.id === id;
    })
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      }

    })
  }
  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }
  deletePersonHandler = (index) => {
    this.state.persons.splice(index, 1);
    this.setState({ persons: this.state.persons });
  }
  loginHandler = () => {
    this.setState({ authenticated: true })
  }
  render() {
    console.log("app.js render");
    let persons = null;
    if (this.state.showPersons) {
      persons = <div>
        <ErrorBoundary>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            isAuthenticated={this.state.authenticated}
          />
        </ErrorBoundary>
      </div>
    }
    return (
      <WithClass classes="App">
        <h1>{this.props.appTitle}</h1>
        <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
        <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
          {this.state.showCockpit ? <Cockpit
            clicked={this.togglePersonsHandler}
            personsLength={this.state.persons.length}
          />
            : ''}
          {persons}
        </AuthContext.Provider>
      </WithClass>
    )
  }
}

export default App;
