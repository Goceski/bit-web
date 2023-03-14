import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./login-form.scss";

const LoginForm = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    alert(`User: ${e.target[0].value} Password: ${e.target[1].value}`);
  };

  return (
    <Container className="kontejner">
      <Row className="justify-content-md-center">
        <Col xs={11} className="okvir">
          <Form onSubmit={onFormSubmit}>
            <h1 className="login-text">Login</h1>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Control
                type="text"
                placeholder="username"
                className="form-text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="password"
                className="form-text"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit">
              login
            </Button>
            <br></br>
            <Button variant="link" type="reset" className="reset">
              reset
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
