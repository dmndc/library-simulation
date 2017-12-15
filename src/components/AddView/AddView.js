import React, { Component } from 'react';


// Import axios method from book services
import { addBook } from '../../bookServices';

import './AddView.css';

class DetailsView extends Component {
  constructor() {
    super();

    this.state = {
      book: {
        title: null,
        author: null,
        genre: null,
        description: null,
        img: 'http://cohenwoodworking.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg'
      }
    }


    this.handleChange = this.handleChange.bind(this);
    this.saveBook = this.saveBook.bind(this);
  }


  handleChange(prop, val) {
    console.log(prop);

    this.setState({
      book: {
        ...this.state.book,
        [prop]: val
      }
    });
  }


  saveBook() {
    addBook(this.state.book);
  }



  render() {

    return (
      <div>
        <h1 className="title">Add a Book<span className="back-button">&#703; Back</span></h1>
        <div className="book-details">

          <div className="img">
            <label>
              img URL
              <input className="input" type="text" onChange={(e) => { this.handleChange('img', e.target.value) }} />
            </label>
            <img className="book-cover" src={this.state.book.img} alt="Book Cover"></img>
          </div>

          <div className="info">
            <label>
              Title:
            <input className="input" type="text" value={this.state.book.title} onChange={(e) => { this.handleChange('title', e.target.value) }} />
            </label>
            <label>
              Author:
            <input className="input" type="text" name="author" onChange={(e) => { this.handleChange('author', e.target.value) }} />
            </label>
            <label>
              Genre:
            <select className="select" onChange={(e) => { this.handleChange('genre', e.target.value) }}>
                <option value="biography">Biography</option>
                <option value="finance">Finance</option>
                <option value="novel">Novel</option>
                <option value="history">History</option>
              </select>
            </label>
            <label>
              Description:
            <textarea className="description" rows="7" onChange={(e) => { this.handleChange('description', e.target.value) }} />
            </label>

            <div className="button">
              <button className="btn save-button" onClick={this.saveBook}>Save Book</button>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default DetailsView;