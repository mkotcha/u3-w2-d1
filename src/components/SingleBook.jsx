import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col>
        <Card className="h-100" border={this.state.selected ? "danger" : ""}>
          <Card.Img
            variant="top"
            src={this.props.book.img}
            onClick={() => this.setState({ selected: !this.state.selected })}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="mb-auto">{this.props.book.title}</Card.Title>
            {this.state.selected && <CommentArea id={this.props.id} />}
            <Card.Text className="d-flex mt-2">
              <span className="me-auto">price: </span> <span>€ {this.props.book.price} </span>
            </Card.Text>
            <Button variant="success">
              add to cart <i className="bi bi-cart-plus"></i>
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">category: {this.props.book.category}</small>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
