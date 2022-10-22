import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { InputField } from './features/inputField/input.component';
import './App.css';
import { TaskLists } from './features/task-lists/task-lists.component';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <InputField />
        <TaskLists/>

      </header>
    </div>
  );
}

export default App;
