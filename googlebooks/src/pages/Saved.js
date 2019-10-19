import React, { Component } from 'react';
import { List, ListItem } from "../components/List";
import axios from "axios";

class Saved extends Component {
    state = {
        savedBooks = [],
        initialized = true
    }
}

//componentDidMount() {
    //something.loadSavedBooks?
//}



getSavedBooks = () => {
    axios.get("/api/books")
      .then(res => {
        this.setState({ savedBooks: res.data })
      })
      .catch((err => console.log(err)))
  }

  //handleDeleteBooks =  (req, res) => {
  // api.deleteBook("/api/books/${id}").then(res) => this.getSavedBooks
  // req.params.id;  }

  render() {
    return (
      <div>
        <List>

        </List>
      </div>
    )

  }





export default Saved;