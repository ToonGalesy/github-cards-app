import React from 'react';
import './App.css';
import { GitHub } from './classes/GitHub';

function App() {
  const title: string = "The Class GitHub Cards App"

  return (
    <GitHub title={title} />
  );
}

export default App;
