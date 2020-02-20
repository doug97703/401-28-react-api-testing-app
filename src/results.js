import React from 'react';
import JSONPretty from 'react-json-pretty';

const Results = (props) => {
  let result = Object.keys(props.results).length === 0 ? 'no results yet' : props.results
  console.log(props.results)
  return (
    <JSONPretty id="json-pretty" data={result}></JSONPretty>
  )
}

export default Results;