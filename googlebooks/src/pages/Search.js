import React, { Component } from "react";
import RemoveBookBtn from "../components/RemoveBookBtn";
//import AddBookBtn from "../components/AddBookBtn";
//import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import axios from "axios";
import { Input } from "../components/Input";

class Search extends Component {
  state = {
    searchRes: [],
    query: "",
    books: []
  };

  /*componentDidMount() {
    this.loadBooks();
  }*/

  displayRes = data => {
    this.setState({ books: data.items });
  };

  searchBooks = () => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${
      this.state.query
    }`;    
    axios
      .get(url)
      .then(res => {    
    this.displayRes( res.data )
      })
      .catch(err => console.log(err));
  };

  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log("Query", this.state.query);
  };

  /*handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };*/

  render() {
    return (
          <div>
          <Form />
        
            //{this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <AddBookBtn 
                    authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                    title={book.volumeInfo.title}
                    synopsis={book.volumeInfo.description ? 
                      book.volumeInfo.description : "No Description Available"} />
                    <RemoveBookBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
              </div>
            ) 
            //: (
              //<h3>No Results to Display</h3>
            //)}
    
            //})
}
}
export default Books;
