import { Fragment } from "react";
import raw from "../data/christmasList.md";
import ReactDOM from "react-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

// import ReactMarkdown from "react-markdown";
import { marked } from "marked";

// const ReactMarkdown = require("react-markdown");

// import { ReactMarkdown } from "react-markdown";
var markdown;
var html;
const Lists = () => {
  fetch(raw)
    .then((r) => r.text())
    .then((text) => {
      markdown = text;
      html = marked(text, { sanitize: true });
    });
  console.log(markdown);
  console.log(html);

  return html ? (
    <Fragment>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Fragment>
  ) : (
    <div>No message</div>
  );
};

export default Lists;
