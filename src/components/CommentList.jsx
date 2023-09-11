import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";
import AddComment from "./AddComment";

const CommentList = props => {
  return (
    <>
      <ListGroup>
        {props.comments.map(comment => (
          <SingleComment comment={comment} key={comment._id} comArea={props.comArea} />
        ))}
      </ListGroup>
      <AddComment id={props.id} comArea={props.comArea} />
    </>
  );
};

export default CommentList;
