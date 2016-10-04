import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Venues extends Component {

  renderListItems() {
    return this.props.venues.map(venue => {
      const photos = venue.venue.featuredPhotos;
      const tips = venue.tips;
      let image;
      let likes;

      if (photos && photos.items) {
        let image = (<img src={`${photos.items[0].prefix}300x200${photos.items[0].suffix}`} alt="Venue image"/>);
      }else {
        let image = (<img src="./assets/snack-logo.svg" alt="snackshack logo"/>)
      }

      if (tips && tips[0].likes) {
        let likes = (<span>Likes: {tips[0].likes.count}</span>);
      } else {
        let likes = (<span>Likes: 0</span>);
      }

      return <li key={venue.venue.name}>
               <p>{venue.venue.name}</p>
               {image}
               <span>Rating: {venue.venue.rating}</span>
               <span>Address: {venue.venue.location.address}</span>
               {likes}
             </li>;
    });
  }

  render() {

    const list = this.renderListItems();

    if (!this.props.venues) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

Venues.propTypes = {
  venues: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    venues: state.venues.venues
  };
}

export default connect(mapStateToProps)(Venues);