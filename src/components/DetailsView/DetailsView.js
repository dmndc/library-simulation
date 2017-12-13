import React, { Component } from 'react';

import './DetailsView.css';

class DetailsView extends Component {
  render() {
    return (
      <div>

        <h1 className="title">Details<span className="back-button">&#703; Back</span></h1>

        <div className="book-details">
          <div className="img">
            <h3>Book img</h3>
          </div>
          <div className="info">
            <h3>Title:</h3>
            <h3>Author:</h3>
            <h3>Genre:</h3>
            <h3>In Stock:</h3>
            <h3>Description:</h3>
          </div>
        </div>
      </div>
    )
  }

}

export default DetailsView;