import React from 'react';

class Form extends React.Component {

  handleSubmit = async e => {
    e.preventDefault();

    let raw = await fetch('https://swapi.co/api/people/');
    let data = await raw.json();
    console.log(data);

    let count = data.count;

    let computedResults = data.results.reduce((list, person) => {
      list[person.name] = person.url;
      return list;
    }, {});

    this.props.handler(count, computedResults);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="proof of life"></input>
      </form>
    );
  }
}

export default Form;
