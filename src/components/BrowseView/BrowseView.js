import React, { Component } from 'react';

// Import axios method from book services
import { getBooksList } from '../../bookServices';

import './BrowseView.css';

class BrowseView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }

  }

  componentDidMount() {
    
    getBooksList().then( res => {
      this.setState({ books: res })
      console.log(this.state.books);
    });

  }

  render() {
    
    return (
      <div>

        <h1 className="title">Browse Inventory</h1>
        {
          this.state.books.map((book) => {
            return (

              <div className="book-details">
      
                <div className="img">
                  <img className="book-cover" src={ book.img } alt="Book Cover"></img>
                </div>
                
                <div className="info">
                  <h1>{ book.title }</h1>
                  <h2>by { book.author }</h2>
                  <h3>In Stock: { book.in_stock ? 'Yes' : 'No' }</h3>
                  <button className="btn">Details</button>
                </div>
              </div>

            )
          })
        }
      </div>
    )
  }

}

export default BrowseView;