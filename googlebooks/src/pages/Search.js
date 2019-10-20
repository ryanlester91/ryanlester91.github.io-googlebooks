import React, { Component } from "react";
import AddBookBtn from "../components/AddBookBtn";
//import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
//import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import EmptyList from "../components/EmptyList";
import axios from "axios";
//import Input  from "../components/Input";
import {Row, Col} from "../components/Grid";

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
      <Row>
        <Col size="md-12">
        <div>
          <input id="bookQ" className="form-control form-control-lg" autoComplete="off" type="text" name="query" onChange={this.handleInput} />
          <button  type="submit" onClick={this.searchBooks} >
            Search for Books
          </button>
                   

          {(this.state.books && this.state.books.length > 0) ? 
          <List>
          {this.state.books.map(book => {
            return (
              <div>
              <ListItem
              key={book.id} 
              authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
              title={book.volumeInfo.title}
              synopsis={book.volumeInfo.description ? 
                book.volumeInfo.description : "No Description Available"}
              
              />

              <AddBookBtn
              authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
              title={book.volumeInfo.title}
              synopsis={book.volumeInfo.description ? 
                book.volumeInfo.description : "No Description Available"}
              
              />
              </div>
            )
          })}
          </List>
          : 
          <EmptyList/>         
          }
          
        </div>
        </Col>
      </Row>
    );
  }
}
export default Search;
