import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Venues extends Component {

  renderListItems() {
    return this.props.venues.map(venue => {
      return <li key={venue.venue.name}>
               {venue.venue.name}
             </li>;
    });
  }

  render() {
    const list = this.renderListItems();

    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    venues: state.venues.venues
  };
}

export default connect(mapStateToProps)(Venues);