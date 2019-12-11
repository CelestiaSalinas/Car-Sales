import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      <button
        className="button"
        onClick={() => props.removeFeature(props.feature)}
      >
        X
      </button>
      {/* Add an onClick to run a function to remove a feature */}
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
