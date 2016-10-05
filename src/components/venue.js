import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import VenueSummary from './venue_summary';
import VenueImage from './venue_image';

import { saveSelectedVenue } from '../actions';

class Venue extends Component {
  constructor(props) {
    super(props);

    this.goToDetails = this.goToDetails.bind(this);
  }

  goToDetails() {
    let venue = this.props.venue.venue;

    this.context.router.push(`/venues/${venue.name}`);
  }

  render() {
    let venue = this.props.venue.venue;

    return (
      <div>
        <li onClick={this.goToDetails} key={venue.name}>
          <h2>{venue.name}</h2>
          <VenueImage venue={this.props.venue} />
          <VenueSummary venue={this.props.venue} />
        </li>
      </div>
    );
  }
}

Venue.propTypes = {
  venue: React.PropTypes.object
};

Venue.contextTypes = {
  router: React.PropTypes.object
};

export default Venue;


