import React, { Component } from 'react';
import { connect } from 'react-redux';

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

    return (
      <div>
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


