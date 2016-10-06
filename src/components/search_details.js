import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class SearchDetails extends Component {
  render() {
    return (
      <div>
        <h3>{`Displaying results for ${this.props.food} in ${this.props.city}`}</h3>
      </div>
    );
  }
};

SearchDetails.propTypes = {
  city: React.PropTypes.string.isRequired,
  food: React.PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    city: state.query.city,
    food: state.query.food
  };
}

export default connect(mapStateToProps)(SearchDetails);
