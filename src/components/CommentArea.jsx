import { Component } from "react";
import CommentList from "./CommentList";
import { Spinner } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    isLoading: true,
    hasError: false,
    comments: [],
  };

  update = () => {
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
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json().then(resp => resp.filter(elm => elm.elementId === this.props.selected));
        this.setState({ comments: data });
      } else {
        this.setState({ hasError: true });
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.selected !== this.props.selected) this.fetchComments();
  };

  render() {
    return (
      <>
        <div>
          {this.state.comments.length === 0 && <h5>There are no comments yet...</h5>}
          {this.state.isLoading && <Spinner animation="border" variant="warning" />}
          <CommentList comments={this.state.comments} selected={this.props.selected} update={this.update} />
        </div>
        <div className="flex-grow-1"></div>
      </>
    );
  }
}

export default CommentArea;
