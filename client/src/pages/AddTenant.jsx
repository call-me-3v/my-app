import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Axios from "axios";
const AddTenant = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    Axios.post("http://localhost:8000/tenants", {
      firstName: firstName,
      lastName: lastName,
    })
      .then((res) => {
        setMessage("User created successfully");
        window.location.reload(true);
      })
      .catch((err) => setMessage("Some error occured"));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>LastName</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Tenant
        </Button>
      </Form>
      <div className="message">{message ? <p>{message}</p> : null}</div>
    </div>
  );
};

export default AddTenant;
