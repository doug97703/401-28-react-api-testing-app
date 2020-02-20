import React from 'react';
import btoa from 'btoa';

class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      headerStyle: {
        display: 'none',
      },
      history: ['history'],
    }
  }

  toggleHeader = () => {
    this.state.headerStyle.display === 'none' ?
      this.setState({headerStyle: {display: 'block'}}) :
      this.setState({ headerStyle: { display: 'none' } })
  }

  handleSubmit = async e => {
    e.preventDefault();
    try {
      let route = e.target[0].value
      let method = e.target[1].checked ? e.target[1].value :
        e.target[2].checked ? e.target[2].value :
          e.target[3].checked ? e.target[3].value :
            e.target[4].checked ? e.target[4].value : 'get';
      let options = {
        method: method,
      }
      let headers = {}
      let body = e.target[5].value || false
      if (body) {
        options.body = body;
        headers['Content-Type'] = 'application/json';
        headers['Accept'] = 'application/json';
      }
      let username = e.target[6].value || false
      let password = e.target[7].value || ''
      if (username) {
        headers['Authorization'] = 'Basic ' + btoa([username, password].join(':'));
        headers['Content-Type'] = 'application/json';
        headers['Accept'] = 'application/json';
      }
      let bearer = e.target[8].value || false
      if (bearer) {
        headers['Authorization'] = `Bearer ${bearer}`
        headers['Content-Type'] = 'application/json';
        headers['Accept'] = 'application/json';
      }
      if (Object.keys(headers).length > 0) { options.headers = headers }
      let history = { options: options, route: route }
      this.props.historySet(history)
      let raw = await fetch(route, options);
      let data = await raw.json();
      this.props.handler(data);
    }
    catch(error) {
      console.log(error)
      this.props.handler(error);
    }

  };

  render() {
    return (
      <>
        <div id="header-stuff">
          <span id="header-toggle" onClick={this.toggleHeader}>Headers</span>
          <div style={this.state.headerStyle} id="headers">
            <h3>Basic Auth</h3>
            <input name="username" id="username" placeholder="username" type="text"></input>
            <input name="password" id="password" placeholder="password" type="text"></input>
            <h3>Bearer Token</h3>
            <input name="bearer" id="bearer" placeholder="bearer" type="text"></input>
          </div>
        </div>
        <form id="theform" onSubmit={this.handleSubmit}>
          <input className="text-input" name="url" id="url" placeholder="URL" type="text"></input>
          <br></br>
          <label for="method-get" className="method-name">GET</label>
          <input name="method" className="radio" value="get" id="get" type="radio"/>
          <label for="method-post" className="method-name">POST</label>
          <input name="method" className="radio" value="post" id="post" type="radio" />
          <label for="method-put" className="method-name">PUT</label>
          <input name="method" className="radio" value="put" id="put" type="radio" />
          <label for="method-delete" className="method-name">DELETE</label>
          <input name="method" className="radio" value="delete" id="delete" type="radio" />
          <input className="text-input" name="raw" id="raw" type="text" placeholder="Raw JSON Body" />
          <br></br>
          
          <br></br>
          <br></br>
          <div id="submit-button">
          <button id="form-submit" onSubmit={this.handleSubmit} type="submit">GO</button>
          </div>
        </form>
      </>
    );
  }
}

export default Form;
