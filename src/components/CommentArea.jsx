import { Component } from "react";
import CommentList from "./CommentList";
import { Spinner } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    isLoading: true,
    hasError: false,
    bookID: "",
    comments: [],
    updated: 0,
  };

  update = () => {
    // this.setState({ updated: this.state.updated++ });
    this.fetchComments();
  };

  fetchComments = async () => {
    const url = "https://striveschool-api.herokuapp.com/api/comments/";
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTIyMGMwMzRmZjAwMTQwM2Y0Y2QiLCJpYXQiOjE2OTQwODk3MTgsImV4cCI6MTY5NTI5OTMxOH0.yy5_J1EHIdfBE0x6pZgPJ2RrplUDZE2vU6TvoY2MdDM",
      },
    };

    this.setState({ isLoading: true });
    console.log("FETCH comments");
    try {
      const response = await fetch(url + this.props.id, options);

      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
        // ogni volta che cambia lo stato, render() viene invocato di nuovo
        console.log("setState");
      } else {
        console.log("setState");
        this.setState({ hasError: true });
      }
    } catch (error) {
      console.log(error);
    } finally {
      // il metodo finally verrà eseguito SEMPRE e IN OGNI CASO, torna utile per qualcosa che debba avvenire sempre e comunque (sia in condizioni positive che negative)
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = () => {
    console.log("COMPONENT DID MOUNT");
    this.fetchComments();
  };
  render() {
    return (
      <>
        <div className="pt-3">
          {this.state.isLoading && <Spinner animation="border" variant="warning" />}
          <CommentList comments={this.state.comments} id={this.props.id} comArea={this} />
        </div>
        <div className="flex-grow-1"></div>
      </>
    );
  }
}

export default CommentArea;
