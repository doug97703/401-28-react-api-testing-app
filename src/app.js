import React from 'react';

import Form from './form.js';
import Results from './results.js';
import History from './history'

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      history: [''],
      historyDefault: true,
    };
  }
  
  handleForm = (results) => {
    // results = results.map( obj => JSON.stringify(obj) )
    this.setState({ results:results });
  };

  historySet = (history) => {
    let current = this.state.history
    !this.state.historyDefault ? current.push(history) : current = [history]
    if (this.state.historyDefault) this.setState({historyDefault: false})
    this.setState({ history: current })
  }

  render() {
    return (
      <>
        <h1>RESTy</h1>
        <div id="app">
          < History history={this.state.history} />
          <div id="form-results">
            <Form historySet={this.historySet} handler={this.handleForm} />
            <Results results={this.state.results} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
