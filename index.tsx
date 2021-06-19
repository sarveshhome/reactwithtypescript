import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Person from './Person';
import Book from './Book.js';
interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      PersonName: 'Sarvesh',
      BookName: 'C# Boook'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
        {/* <Person name="sarvesh" /> */}
        <Person name={this.state.PersonName} />
        <Book name={this.state.BookName} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
