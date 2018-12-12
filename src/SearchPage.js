import React, { Component } from "react"
import { Link } from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import List from "./List";
import { PropTypes } from "prop-types"

class SearchPage extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        moveBookToShelf: PropTypes.func.isRequired
    };

    state = {
        fetchedBooks: []
    };

    /* Searching for books */

    fetchBooks = (event) => {
        const query = event.target.value.trim();

        if (query) {
            BooksAPI.search(query).then((books) => {
                books.map((book) => {
                    return this.props.books.map((pbook) => {
                      if(pbook.id === book.id){
                        return book.shelf = pbook.shelf
                      } else {
                        return "none"
                      }
                    })
                }); //cant think of any other way to apply the cerrect shelf value to each book besides checing id.
                if(books instanceof Array){this.setState({fetchedBooks: books})} else { this.setState({fetchedBooks: []})};
            });
        }
    };

    render () {

        const { moveBookToShelf } = this.props;

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/">Home</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author" onChange={this.fetchBooks}/>
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {this.state.fetchedBooks.map(book => (
                                <List key = {book.id} books={book} moveBookToShelf={moveBookToShelf}/>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage
