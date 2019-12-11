import React from 'react';


import { addFeatures, removeItem } from './actions/actions'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';

const App = ({ state, addFeatures, removeItem}) => {


  const removeFeature = item => {
    // dispatch an action here to remove an item
    removeItem(item);
    console.log(`remove item`, item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    addFeatures(item);
    console.log(`add item`, item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store}buyItem={buyItem} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, {addFeatures, removeItem})(App);
