import { Container, Dropdown } from "react-bootstrap";

const Jumbo = props => {
  return (
    <Container>
      <div className="p-5 my-4 bg-body-tertiary rounded-3">
        <Container fluid className="py-5">
          <h1 className="display-5 fw-bold">Fake Book Store</h1>
          <p className="col-md-8 fs-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam error blanditiis ea tempore saepe iusto
            itaque quos!
          </p>

          <Dropdown>
            <Dropdown.Toggle variant="primary" size="lg" id="dropdown-basic">
              category
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" onClick={() => props.classIstance.setState({ category: "fantasy" })}>
                fantasy
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={() => props.classIstance.setState({ category: "history" })}>
                history
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" onClick={() => props.classIstance.setState({ category: "horror" })}>
                horror
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" onClick={() => props.classIstance.setState({ category: "romance" })}>
                romance
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" onClick={() => props.classIstance.setState({ category: "scifi" })}>
                scifi
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" onClick={() => props.classIstance.setState({ category: "all" })}>
                all
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </div>
    </Container>
  );
};

export default Jumbo;
