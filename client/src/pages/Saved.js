import React from "react";
import API from "../utils/API";


class Saved extends React.Component {
    state = {
        books: []
    }
    componentDidMount() {
        this.loadBooks();
      }

    loadBooks = () => {
    API.getBooks()
        .then(res => {
            this.setState({ books: res.data });
            console.log(this.state.books)
        }
        )
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <h1>Saved books to peruse</h1>
                {this.state.books.length ? (
                    this.state.books.map(book => (
                        <div className="card" key={book._id}>
                            <div className="card-body">
                                <a href={book.link}><img src={book.image} /></a>
                                <p>Title: {book.title}</p>
                                <p>Description: {book.description}</p>
                            </div>
                        </div>
                    ))
                ) : <h1>No Content to display</h1>}
            </div>
        )
    }
}

export default Saved;
