import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Header from './components/Layout/Header';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
