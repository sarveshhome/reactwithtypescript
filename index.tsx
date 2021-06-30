import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Person from './Person';
import Book from './Book.js';
import Home from './Components/UI/Home.js';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/share/Header.js';
import Address from './Components/UI/Address.js';

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

render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
