import React, { Component } from 'react';

// Import axios method from book services
import { getBook } from '../../bookServices';

import './DetailsView.css';

class DetailsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: null
    }

  }

  componentDidMount() {
    
    getBook(this.props.match.params.id).then( res => {
      this.setState({ book: res })
      console.log(this.state.book[0]);
    });

    
  }

  render() {

    return (
      <div>

        <h1 className="title">Details<span className="back-button">&#703; Back</span></h1>
        { this.state.book ? 
        <div className="book-details">

          <div className="img">
            <img className="book-cover" src={ this.state.book[0].img } alt="Book Cover"></img>
          </div>
          
          <div className="info">
            <h3>Title: { this.state.book[0].title }</h3>
            <h3>Author: { this.state.book[0].author }</h3>
            <h3>Genre: { this.state.book[0].genre }</h3>
            <h3>In Stock: { this.state.book[0].in_stock ? 'Yes' : 'No' }</h3>
            <h3>Description:</h3>
            <p>{ this.state.book[0].description }</p>
          </div>
        </div>

        :
        <h6>No data!</h6>
        }

      </div>
    )
  }

}

export default DetailsView;