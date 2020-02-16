import React from 'react';

import Form from './form.js';
import Results from './results.js';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
    };
  }
  
  handleForm = (count, results) => {
    this.setState({ count, results });
  };

  render() {
    return (
      <div>
        <h1>PROOF OF LIFE</h1>
        {/* <Form handler={this.handleForm} />
        <Results Results={this.state.results} /> */}
      </div>
    );
  }
}

export default App;
