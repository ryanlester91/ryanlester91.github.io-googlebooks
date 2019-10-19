import React from "react";
import { Col, Row, Container } from "../Grid";
//import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export class ListItem extends React.Component {



render(){
  console.log(this.props)
  return (
    <div>
    <li>
      <Container>
        <Row>
          <Col size="sm-8 md-9">
            <h3>{this.props.title}<span><h5>{this.props.authors}</h5></span></h3>
            <p>
              {this.props.synopsis}
            </p>
            Go to book!
          </Col>
        </Row>
      </Container>
    </li>
    </div>
  );
};
}

