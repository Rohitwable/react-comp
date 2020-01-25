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
    untouched: "this will not effect"
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
  render() {
    return (
      <div className="App">
        <p>App component</p>
        <button onClick={this.switchNameHandler.bind(this, "Rohit")}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          clicked={()=>this.switchNameHandler("person")} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    )
  }
}

export default App;
