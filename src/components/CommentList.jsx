import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";
import AddComment from "./AddComment";

const CommentList = props => {
  return (
    <>
      <ListGroup>
        {props.comments.map(comment => (
          <SingleComment comment={comment} key={comment._id} update={props.update} />
        ))}
      </ListGroup>
      <AddComment selected={props.selected} update={props.update} />
    </>
  );
};

export default CommentList;
