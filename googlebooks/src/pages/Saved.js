import React, { Component } from 'react';
import { List, ListItem } from "../components/List";
import {Row, Col} from "../components/Grid";
import EmptyList from "../components/EmptyList";
import RemoveBookBtn from "../components/RemoveBookBtn";
import axios from "axios";

class Saved extends Component {
    state = {
        savedBooks: [],
        initialized: true
    }

componentDidMount() {
    this.getSavedBooks()}



getSavedBooks = () => {
    axios.get("/api/books")
      .then(res => {
        this.setState({ savedBooks: res.data })
      })
      .catch((err => console.log(err)))
  }

  deleteFromDB =  id => {
    console.log(id);
  }

  render() {
    return (
      <div>
        <Row>
          <Col size="md-12">
            {this.state.savedBooks.length > 0 ?
              <List>
                {this.state.savedBooks.map(book => {
                  console.log(book)
                  return (
                    <div>
                      <ListItem
                        key={book._id}
                        authors={book.authors}
                        title={book.title}
                        synopsis={book.synopsis}
                      />
                      <RemoveBookBtn
                        onClick={() => this.deleteFromDB(book._id)}
                      />
                    </div>
                  )

                })}
              </List>
              :
              <EmptyList />
            }
          </Col>
        </Row>
      </div>
    );
  }
}

export default Saved;