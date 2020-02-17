import React from 'react';

class Form extends React.Component {

  handleSubmit = async e => {
    e.preventDefault();
    let route = e.target[0].value
    let method = e.target[1].value || 'get'
    let raw = await fetch(route, {
      method: method,
    });
    let data = await raw.json();
    console.log(data);
    this.props.handler(data);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="url" id="url" placeholder="URL" type="text"></input>
        <input id="method" placeholder="GET/POST/PUT/DELETE" type="text"></input>
        <br></br>
        <button onSubmit={this.handleSubmit} type="submit">GO</button>
      </form>
    );
  }
}

export default Form;
