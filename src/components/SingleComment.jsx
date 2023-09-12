import { Button, ListGroup } from "react-bootstrap";

const deleteComment = async (event, props) => {
  const url = "https://striveschool-api.herokuapp.com/api/comments/";
  const options = {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTIyMGMwMzRmZjAwMTQwM2Y0Y2QiLCJpYXQiOjE2OTQwODk3MTgsImV4cCI6MTY5NTI5OTMxOH0.yy5_J1EHIdfBE0x6pZgPJ2RrplUDZE2vU6TvoY2MdDM",
    },
  };

  try {
    const response = await fetch(url + props.comment._id, options);
    if (response.ok) {
      props.update();
    }
  } catch (error) {
    console.log(error);
  }
};

const SingleComment = props => {
  return (
    <ListGroup.Item className="d-flex align-items-center">
      <span className="me-auto">{props.comment.comment}</span>
      <Button variant="danger" size="sm" onClick={event => deleteComment(event, props)}>
        <i className="bi bi-trash"></i>
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
