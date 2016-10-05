import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Venue from './venue';

class VenuesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="venue-list">
        <h1>SNACKSHACK</h1>
        <ul>
          {
            this.props.venues.map((venue) => {
              return <Venue key={venue.venue.name} venue={venue}/>
            })
          }
        </ul>
      </div>
    );
  }
}

VenuesList.propTypes = {
  venues: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    venues: state.venues.venues
  };
}

export default connect(mapStateToProps)(VenuesList);