import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class SearchDetails extends Component {
  render() {
    return (
      <div>
        <h3>{`Displaying results for ${this.props.food.food} in ${this.props.city.city}`}</h3>
      </div>
    );
  }
};

SearchDetails.propTypes = {
  city: React.PropTypes.object.isRequired,
  food: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    city: state.city,
    food: state.food
  };
}

export default connect(mapStateToProps)(SearchDetails);
