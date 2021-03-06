import React, { Component } from 'react';

class VenueSummary extends Component {
  constructor(props) {
    super(props);

    this.isLikes = this.isLikes.bind(this);
    this.isRating = this.isRating.bind(this);
    this.isAddress = this.isAddress.bind(this);
  }

  isLikes() {
    let tips = this.props.venue.tips;
    let likes;

    if (tips && tips[0].likes) {
      likes = (<span>{tips[0].likes.count} Likes</span>);
    } else {
      likes = (<span>0 Likes</span>);
    }

    return likes;
  }

  isRating() {
    let venue = this.props.venue.venue;
    let rating;

    if (venue.rating) {
      rating = (<span>{venue.rating}</span>);
    } else {
      rating = (<span>NR</span>);
    }

    return rating;
  }

  isAddress() {
    let venue = this.props.venue.venue;
    let address;

    if (venue.location && venue.location.address) {
      address = (<span>{venue.location.address}</span>);
    } else {
      address = (<span>Address unavailable</span>)
    }

    return address;
  }

  render() {
    let likes = this.isLikes();
    let rating = this.isRating();
    let address = this.isAddress();

    return (
      <div className="venue-detail">
        {rating}
        {address}
        {likes}
      </div>
    );
  }
}

VenueSummary.propTypes = {
  venue: React.PropTypes.object.isRequired
};

export default VenueSummary;