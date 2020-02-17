import React from 'react';

import Form from './form.js';
import Results from './results.js';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
    };
  }
  
  handleForm = (results) => {
    // results = results.map( obj => JSON.stringify(obj) )
    this.setState({ results:results });
  };

  render() {
    return (
      <div>
        <h1>RESTy</h1>
        <Form handler={this.handleForm} />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;
