import React from 'react';

const UserFeedback = ({ venue }) => {
  const rating = venue.venue.rating;
  const likes = venue.tips[0].likes.summary;
  const price = venue.venue.price.message;

  return (
    <div className="user-feedback">
      <span>{rating}</span>
      <span>{likes}</span>
      <span>{price}</span>
    </div>
  );
};

UserFeedback.propTypes = {
  venue: React.PropTypes.object.isRequired
};

export default UserFeedback;