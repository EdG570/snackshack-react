import React, { Component, PropTypes } from 'react';

class VenueImage extends Component {
  constructor(props) {
    super(props);

    this.isPhoto = this.isPhoto.bind(this);
  }

  isPhoto() {
    let photos = this.props.venue.venue.featuredPhotos;
    let image;

    if (photos && photos.items) {
      image = (<img src={`${photos.items[0].prefix}300x200${photos.items[0].suffix}`} alt="Venue image"/>);
    } else {
      image = (<img className="fallback-photo" src="src/assets/snack-logo.svg" alt="snackshack logo"/>)
    }

    return image;
  }

  render() {
    let image = this.isPhoto();

    return (
      <div>
        {image}
      </div>
    );
  }
}

VenueImage.propTypes = {
  venue: React.PropTypes.object
};

export default VenueImage;

