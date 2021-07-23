import React from 'react';

const ResultsItem = ({ feeding, idx }) => {
  return (
    <li className="results-item">
      <strong>{feeding.neighbourhood}, {feeding.city}</strong>

      <br/>

      Food: {feeding.foodType.map((food, idx) => food)}

      <br/>

      Amount: {feeding.foodAmount} handfuls

      <br/>

      # Ducks: {feeding.numDucks}

      <br />

      Time of Day: {new Date(feeding.time).toLocaleTimeString()}
    </li>
  );
}

export default ResultsItem;