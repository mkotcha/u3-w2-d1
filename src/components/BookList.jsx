import { Component } from "react";

import Jumbo from "./Jumbo";
import MyNav from "./MyNav";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
let categoryArr = [];

class BookList extends Component {
  state = {
    category: "",
    filter: "",
    selected: "",
    books: [],
  };

  fakeFetch = async category => {
    this.setState({ category }, this.setBooks);
  };

  setBooks = async () => {
    switch (this.state.category) {
      case "fantasy":
        categoryArr = fantasy;
        break;
      case "history":
        categoryArr = history;
        break;
      case "horror":
        categoryArr = horror;
        break;
      case "romance":
        categoryArr = romance;
        break;
      case "scifi":
        categoryArr = scifi;
        break;

      default:
        categoryArr = [...fantasy, ...history, ...horror, ...romance, ...scifi];
        break;
    }

    categoryArr = categoryArr.filter(elm => elm.title.toLowerCase().includes(this.state.filter.toLowerCase()) >= 1);

    this.setState({ books: categoryArr });
  };

  fakeSearch = filter => {
    this.setState({ filter }, this.setBooks);
    // this.setState({ selected: "" });
  };

  selectBook = id => {
    this.setState({ selected: id });
  };

  componentDidMount = () => {
    this.fakeFetch("horror");
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.category !== this.state.category) {
      this.setState({ selected: "" });
    }
  };

  render() {
    return (
      <>
        <MyNav fakeSearch={this.fakeSearch} />
        <Jumbo fakeFetch={this.fakeFetch} />
        <Container>
          <Row>
            <Col>
              <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
                {this.state.books.map((book, index) => (
                  <SingleBook
                    book={book}
                    key={book.asin + index}
                    id={book.asin}
                    select={this.selectBook}
                    selected={this.state.selected}
                  />
                ))}
              </Row>
            </Col>
            <Col sm="3">
              <div className="sticky-top vh-100 overflow-y-scroll">
                {this.state.selected ? (
                  <CommentArea selected={this.state.selected} />
                ) : (
                  <h5>Select a book to view comments</h5>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
