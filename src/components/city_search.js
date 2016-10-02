import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { saveCity } from '../actions/index';

class CitySearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      error: ''
    };
  }

  validate(e) {
    const regex = /^[a-zA-Z\s]*$/;

    if (!this.state.city) {
      e.preventDefault();
      this.setState({ error: 'This field cannot be empty' });
    } else if (!regex.test(this.state.city)) {
      e.preventDefault();
      this.setState({ error: 'This field only accepts letters' });
    }

    if (this.state.error) {
      return;
    }

    this.props.saveCity(this.state.city);
  }

  updateState(e) {
    this.setState({ city: e.target.value });
    console.log(this.state.city);
  }

  render() {

    return (
      <div className="search-container">
        <h1>SNACKSHACK</h1>
        <span className="error-msg">{this.state.error}</span>
        <input type="text"
               value={this.state.city}
               placeholder="Enter a location here"
               onChange={ this.updateState.bind(this) }
        />
        <Link onClick={ this.validate.bind(this) } to='/food'>Next</Link>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveCity: saveCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(CitySearch);