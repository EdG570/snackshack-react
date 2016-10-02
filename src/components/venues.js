import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Venues extends Component {
  render() {
    return (
      <div>
        Hi from venues!
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { venues: state.venues };
}

export default connect(mapStateToProps)(Venues);