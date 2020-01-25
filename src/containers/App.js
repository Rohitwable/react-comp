import React from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends React.Component {
  // return React.createElement('div', { className: "App" }, React.createElement('h1', null, "First React app"));
  state = {
    persons: [
      { id: '1', name: "person1", age: "20" },
      { id: '2', name: "person2", age: "23" },
      { id: '3', name: "person3", age: "44" },
    ],
    untouched: "this will not effect",
    showPersons: false,
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
    this.setState({
      persons: persons
    })
  }
  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }
  deletePersonHandler = (index) => {
    this.state.persons.splice(index, 1);
    this.setState({ persons: this.state.persons });
  }
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = <div>
        <ErrorBoundary>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </ErrorBoundary>
      </div>
    }
    return (
      <div className="App">
        <Cockpit
          clicked={this.togglePersonsHandler}
          persons={this.state.persons}
        />
        {persons}
      </div>
    )
  }
}

export default App;
