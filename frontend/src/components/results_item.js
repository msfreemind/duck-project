import React from 'react';

const ResultsItem = ({ feeding, idx }) => {
  return (
    <li className="results-item">
      <strong>{feeding.neighbourhood}, {feeding.city}</strong>

      <br/>

      Food: {feeding.foodType.map((food, idx) => {
        return idx < feeding.foodType.length - 1 ? food + ", " : food;
      })}

      <br/>

      Amount: {feeding.foodAmount} handfuls

      <br/>

      # Ducks: {feeding.numDucks}

      <br />

      Time of Day: {feeding.time}
    </li>
  );
}

export default ResultsItem;