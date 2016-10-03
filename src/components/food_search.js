import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchVenues } from '../actions/index';

class FoodSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      food: '',
      error: ''
    }
  }

  validate(e) {
    const regex = /^[a-zA-Z\s]*$/;

    if (!this.state.food) {
      e.preventDefault();
      this.setState({ error: 'This field cannot be empty' });
    } else if (!regex.test(this.state.food)) {
      e.preventDefault();
      this.setState({ error: 'This field only accepts letters' });
    }

    if (this.state.error) {
      return;
    }

    console.log(this.props.city);
    this.props.fetchVenues(this.props.city.city, this.state.food);
  }

  updateState(e) {
    this.setState({ food: e.target.value });
  }

  render() {
    return (
      <div className="search-container">
        <h1>SNACKSHACK</h1>
        <input type="text"
               placeholder="Enter a type of food here"
               value={this.state.food}
               onChange={ this.updateState.bind(this) }
        />
        <Link onClick={ this.validate.bind(this) } to='/venues'>Search</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { city: state.city };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVenues: fetchVenues }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodSearch);