import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import "../../../styles/form.scss";
import { useDispatch, useSelector } from "react-redux";
import { activeUser } from "../../../services/slices/formSlice";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.form);

  const { Formik } = formik;
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (values) => {
    setUserData(users.userList);
    console.log("userData", userData);
    userData?.map((getUser) => {
      console.log(getUser);
      if (
        getUser.username === values.username &&
        getUser.password === values.password
      ) {
        sessionStorage.username = values.username;
        dispatch(activeUser(getUser));
        navigate("/");
      }
    });
  };
  return (
    <>
      <div
        className="formElem"
        style={{
          textAlign: "justify",
        }}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={schema}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-5">
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormikUsername2"
                >
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.username}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-5">
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormik103"
                  className="position-relative"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />

                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Nav.Link className="mx-2" as={Link} to="/signup">
                  signp
                </Nav.Link>
              </Row>
              <Button type="submit">SignUp</Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SignIn;
