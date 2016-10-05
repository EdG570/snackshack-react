import React, { Component, PropTypes } from 'react';

import VenueDetails from './venue_detail';
import VenueImage from './venue_image';

class Venue extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let venue = this.props.venue.venue;

    return (
      <li key={venue.name}>
        <h2>{venue.name}</h2>
        <VenueImage venue={this.props.venue} />
        <VenueDetails venue={this.props.venue} />
      </li>
    );
  }
}

Venue.propTypes = {
  venue: React.PropTypes.object.isRequired
};


export default Venue;
