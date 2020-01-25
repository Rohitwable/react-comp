import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  // return React.createElement('div', { className: "App" }, React.createElement('h1', null, "First React app"));
  state = {
    persons: [
      { name: "person1", age: "20" },
      { name: "person2", age: "23" },
      { name: "person3", age: "44" },
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
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: "33" },
        { name: "person1", age: "20" },
        { name: "person2", age: "23" },
        { name: "person3", age: "44" },
      ]
    })
  }
  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    }
    return (
      <div className="App">
        <p>App component</p>
        <button style={style} onClick={this.togglePersonsHandler}>Switch name</button>
        {this.state.showPersons ?
          <div>
            {this.state.persons.map((value, index) => (
              <Person
                key={index}
                name={value.name}
                age={value.age}
                clicked={() => this.switchNameHandler("person")}
                changed={this.nameChangeHandler} />
            ))}
          </div>
          : ''}
      </div>
    )
  }
}

export default App;
