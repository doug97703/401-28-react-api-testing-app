import React from 'react';
import JSONPretty from 'react-json-pretty';

const History = (props) => {
  console.log(props.history)
  return (
    <div id="history">
      <h3>HISTORY</h3>
      {props.history.map( obj => (
        <ul>
          <li>ROUTE: {JSON.stringify(obj.route)}</li>
          <li>OPTIONS: {JSON.stringify(obj.options)}</li>
          <br></br>
        </ul>
      ))}
    </div>
  )
}

export default History;