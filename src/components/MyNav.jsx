import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";

const setCategory = (event, fetch) => {
  event.preventDefault();
  if (event.type === "change") fetch(event.target.value);
  else fetch(event.target.filter.value);
};

const MyNav = props => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={event => setCategory(event, props.fakeSearch)}>
            <Form.Control
              id="filter"
              type="search"
              className="me-2"
              aria-label="Search"
              placeholder="Scrivi un titolo..."
              onChange={event => setCategory(event, props.fakeSearch)}
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
