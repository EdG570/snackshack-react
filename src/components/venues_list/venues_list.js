import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Venue from './venue';
import SearchDetails from '../search_details';
import Header from '../header';

class VenuesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="venue-list">
        <Header />
        <SearchDetails  />
        <ul>
          {
            this.props.venues.map((venue, index) => {
              return <Venue key={index}  venue={venue}/>
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