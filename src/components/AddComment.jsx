import { Component } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";

class AddComment extends Component {
  state = {
    hasAlert: false,
    alert: { message: "", status: "", variant: "" },
    modalShow: false,
    comment: {
      comment: "",
      elementId: "",
      rate: 1,
    },
  };

  handleClose = () => {
    this.setState({ modalShow: false });
  };

  handleShow = () => {
    this.setState({ modalShow: true });
  };

  handleChange = (propertyName, propertyValue) => {
    this.setState({ comment: { ...this.state.comment, [propertyName]: propertyValue } });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const url = "https://striveschool-api.herokuapp.com/api/comments/";
    let options = {};

    options = {
      method: "POST",
      body: JSON.stringify(this.state.comment),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTIyMGMwMzRmZjAwMTQwM2Y0Y2QiLCJpYXQiOjE2OTQwODk3MTgsImV4cCI6MTY5NTI5OTMxOH0.yy5_J1EHIdfBE0x6pZgPJ2RrplUDZE2vU6TvoY2MdDM",
      },
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        this.setState({
          comment: {
            comment: "",
            elementId: this.props.selected,
            rate: 1,
          },
        });

        const newComment = await response.json();
        // this.props.mod(newComment._id);
        this.props.update();

        this.setState({
          hasAlert: true,
          alert: {
            message: "comment - " + newComment.comment + " - added!",
            status: response.status,
            variant: "success",
          },
        });
        setTimeout(() => this.setState({ hasAlert: false }), 2500);
      } else {
        this.setState({
          hasAlert: true,
          alert: { message: "Error data", status: response.status, variant: "danger" },
        });
        setTimeout(() => this.setState({ hasAlert: false }), 2000);
      }
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => this.handleClose(), 2000);
  };

  componentDidUpdate = pervProps => {
    if (pervProps.selected !== this.props.selected) {
      this.setState({ comment: { ...this.state.comment, elementId: this.props.selected } });
    }
  };

  componentDidMount = () => {
    this.setState({ comment: { ...this.state.comment, elementId: this.props.selected } });
  };

  render() {
    return (
      <>
        <Button variant="primary" className="w-100 mt-2" onClick={this.handleShow}>
          add comment
        </Button>

        <Modal show={this.state.modalShow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>add comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.hasAlert && (
              <Alert variant={this.state.alert.variant}>
                {this.state.alert.message}, status code: {this.state.alert.status}
              </Alert>
            )}
            <Form id="addComment">
              <Form.Group>
                <Form.Label>Rating</Form.Label>
                <Form.Range
                  min="1"
                  max="5"
                  step="1"
                  value={this.state.comment.rate}
                  onChange={event => this.handleChange("rate", event.target.value)}
                />
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  placeholder="your comment..."
                  value={this.state.comment.comment}
                  onChange={event => this.handleChange("comment", event.target.value)}
                  required
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button type="submit" form="addComment" variant="primary" onClick={this.handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default AddComment;
