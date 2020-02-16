import React from 'react';

const Results = (props) => {

  return (
    <div>
      <ul>
        {Object.keys(props.results).map((key, idx) => {
          return (
            <li key={idx}>
              <a href={props.results[key]}>{key}</a>
            </li>
          );
        })}
      </ul>
    </div>
  )

}

export default Results;