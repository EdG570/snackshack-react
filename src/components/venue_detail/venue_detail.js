import React, { Component } from 'react';
import { connect } from 'react-redux';

import VenueImage from '../venues_list/venue_image';
import UserFeedback from './user_feedback';
import Header from '../header';

class VenueDetail extends Component {
  constructor(props) {
    super(props);
  }

  findVenue() {
    return this.props.venues.filter((venue) => {
      return venue.venue.name === this.props.params.venue;
    });
  }

  render() {
    const selectedVenue = this.findVenue();
    const name = selectedVenue[0].venue.name;

    return (
      <div className="venue-container">
        <Header />
        <VenueImage venue={selectedVenue[0]} />
        <UserFeedback venue={selectedVenue[0]} />
        {console.log(selectedVenue)}
      </div>
    );
  }
}

VenueDetail.propTypes = {
  venues: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    venues: state.venues.venues
  };
}

export default connect(mapStateToProps)(VenueDetail);


