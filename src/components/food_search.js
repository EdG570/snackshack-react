import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { saveFood } from '../actions/index';

class FoodSearch extends Component {

  render() {
    return (
      <div className="search-container">
        <h1>SNACKSHACK</h1>
        <input type="text"
               placeholder="Enter a type of food here"
        />
        <Link onClick={() => this.props.saveFood()} to='/venues'>Search</Link>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveFood: saveFood }, dispatch);
}

export default connect(null, mapDispatchToProps)(FoodSearch);