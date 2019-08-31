import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CreateDeck from './Components/CreateDeck';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Poker practice calculator</h1> 
        <p>A project by john meyer</p>
        <a href="https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1">The Api I will be using</a>
        <a href="https://github.com/crobertsbmw/deckofcards">Github</a>
      </header>
      <CreateDeck />
    </div>
  );
}

export default App;
