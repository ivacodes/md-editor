import React, { Component } from "react";
import "./App.css";
import marked from "marked";
import DOMPurify from "dompurify";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { sampleText } from "./Sample";

export default class App extends Component {
  state = {
    text: sampleText,
  };

  handleChange = (e) => {
    const text = e.target.value;
    this.setState({ text });
  };

  renderText = (text) => {
    var clean = DOMPurify.sanitize(text);
    const __html = marked(clean);
    return { __html };
  };

  render() {
    const { text } = this.state;
    return (
      <Container>
        <Row>
          <Col xs={6}>
            <textarea
              rows='35'
              onChange={this.handleChange}
              value={text}
            ></textarea>
          </Col>
          <Col xs={6}>
            <div dangerouslySetInnerHTML={this.renderText(text)} />
          </Col>
        </Row>
      </Container>
    );
  }
}
