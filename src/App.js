import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  // return React.createElement('div', { className: "App" }, React.createElement('h1', null, "First React app"));
  return (
    <div className="App">
      <p>App component</p>
      <Person name="person1" age="30" />
      <Person name="person2" age="12">Hobbies: Racing</Person>
      <Person name="person3" age="23" />
    </div>
  )
}

export default App;
