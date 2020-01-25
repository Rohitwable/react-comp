import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  // return React.createElement('div', { className: "App" }, React.createElement('h1', null, "First React app"));
  return (
    <div className="App">
      <p>App component</p>
      <Person />
    </div>
  )
}

export default App;
