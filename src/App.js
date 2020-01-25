import React from 'react';
import './App.css';
import Person from './Person/Person';

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
    alert(personIndex);
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
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = <div>
        {this.state.persons.map((value, index) => (
          <Person
            key={index}
            name={value.name}
            age={value.age}
            clicked={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangeHandler(event, value.id)} />
        ))}
      </div>
      style.backgroundColor = "red";
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      <div className="App">
        <p className={classes.join(' ')}>App component</p>
        <button style={style} onClick={this.togglePersonsHandler}>Switch name</button>
        {persons}
      </div>
    )
  }
}

export default App;
