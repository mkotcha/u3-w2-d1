import { Button, Card, Col } from "react-bootstrap";

const SingleBook = props => {
  return (
    <Col>
      <Card className="h-100" border={props.selected === props.book.asin ? "danger" : ""}>
        <Card.Img variant="top" src={props.book.img} onClick={() => props.select(props.book.asin)} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="mb-auto">{props.book.title}</Card.Title>

          <Card.Text className="d-flex mt-2">
            <span className="me-auto">price: </span> <span>€ {props.book.price} </span>
          </Card.Text>
          <Button variant="success">
            add to cart <i className="bi bi-cart-plus"></i>
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">category: {props.book.category}</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SingleBook;
