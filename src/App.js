import React from "react";
import PropTypes from "prop-types";

function Food({ name, stringLength }) {
  return <div>
    <h3>I love {name}.</h3>
    <h4>The length of this string '{name}' is {stringLength}.</h4>
  </div>
}

const foodILike = [
  {
    id: 1,
    name: 'kimbap',
    stringLength: 6
  },
  {
    id: 2,
    name: 'namul',
    stringLength: 5
  },
  {
    id: 3,
    name: 'hanugalbi',
    stringLength: 9
  },
  {
    id: 4,
    name: 'jajangmyeon',
    stringLength: 11
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  stringLength: PropTypes.number.isRequired
}

function App() {
  return (
    <div className="App">
      {foodILike.map(food => <Food key={food.id} name={food.name} stringLength={food.stringLength} />)}
    </div>
  );
}

export default App;
