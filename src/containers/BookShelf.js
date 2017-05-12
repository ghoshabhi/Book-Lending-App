import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
// import { bindActionCreators } from 'redux';

class BookShelf extends Component {
  _renderBooks() {
    const category1 = this.props.books.filter(book => book.category === 'currently_reading');
    const category2 = this.props.books.filter(book => book.category === 'want_to_read');
    const category3 = this.props.books.filter(book => book.category === 'read');
    console.log(category1, category2, category3);
    
    return (
      <div>
        <div className="shelf">
          <b>Currently Reading</b>
          <div className="shelf__books">
            {category1.map((book) => {
              return (
                  <Book key={book.id} book={book} />
                );
              })
            }
          </div>
        </div>
        <div>
          <b>Want To Read</b>
          <div className="shelf__books">
            {category2.map((book) => {
              return (
                <Book key={book.id} book={book} />
                );
              })
            }
          </div>
        </div>
        <div>
          <b>Read</b>
          <div className="shelf__books">
          {category3.map((book) => {
            return (
              <Book key={book.id} book={book} />
              );
            })
          }
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='book-shelf'>
        <div>BookShelf</div>
        <br/>
        {this._renderBooks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(
  mapStateToProps
)(BookShelf);
