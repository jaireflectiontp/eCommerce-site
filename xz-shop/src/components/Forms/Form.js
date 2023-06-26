import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import "./form.scss";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/slices/formSlice";
function FormComponent() {
  const dispatch = useDispatch();

  const { Formik } = formik;

  const schema = yup.object().shape({
    username: yup.string().required(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    password: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "terms must be accepted"),
  });

  const initialValues = {
    username: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    zip: "",
    password: "",
    terms: false,
  };

  const onSubmit = (values) => {
    dispatch(registerUser(values));
  };

  return (
    <div
      className="formElem"
      style={{
        textAlign: "justify",
      }}
    >
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-4">
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
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.username}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationFormikUsername2">
                <Form.Label>First Name</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    aria-describedby="inputGroupPrepend"
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                    isInvalid={!!errors.firstname}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.firstname}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationFormikUsername2">
                <Form.Label>Last Name</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    aria-describedby="inputGroupPrepend"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    isInvalid={!!errors.lastname}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.lastname}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row className="mb-4">
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik103"
                className="position-relative"
              >
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik104"
                className="position-relative"
              >
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  isInvalid={!!errors.state}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik105"
                className="position-relative"
              >
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                  isInvalid={!!errors.zip}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.zip}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormik103"
                className="position-relative"
              >
                <Form.Label>Phone no.</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Phone Number"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormik103"
                className="position-relative"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-4">
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

            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Check
                  className="d-flex"
                  style={{ gap: "12px" }}
                  required
                  name="terms"
                  label="Agree to terms and conditions"
                  onChange={handleChange}
                  isInvalid={!!errors.terms}
                  feedback={errors.terms}
                  feedbackType="invalid"
                  id="validationFormik0"
                />
              </Form.Group>
            </Row>
            <Button type="submit">SignUp</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormComponent;
