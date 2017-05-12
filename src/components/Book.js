import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div className='book'>
        <p>{this.props.book.title}</p>
        <i>{this.props.book.pages} pages</i>
      </div>
    );
  }
}

export default Book;
