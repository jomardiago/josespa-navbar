import React from "react";
import { navigateToUrl } from "single-spa";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Root(props) {
  const [authenticated, setAuthenticated] = React.useState(false);
  React.useEffect(() => {
    // check if user exists...
    if (!authenticated) navigateToUrl('/auth');
  }, []);

  function navigate(e, route) {
    e.preventDefault();
    navigateToUrl(route);
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand onClick={(e) => navigate(e, "/")}>JoseSpa</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={(e) => navigate(e, "/employees")}>
            Employees
          </Nav.Link>
          <Nav.Link onClick={(e) => navigate(e, "/departments")}>
            Departments
          </Nav.Link>
        </Nav>
        {authenticated && (
          <Form inline>
            <Button variant="outline-success">Logout</Button>
          </Form>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
