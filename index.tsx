import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Person from './Person';
import Book from './Book.js';
import Header from './Components/share/Header.js';
import Address from './Components/UI/Address.js';
import Home from './Components/UI/Home.js';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
        <Header />
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
        {/* <Person name="sarvesh" /> */}
        <Person name={this.state.PersonName} />
        <Book name={this.state.BookName} />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/Address" exact>
            <Address />
          </Route>
        </Switch>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
