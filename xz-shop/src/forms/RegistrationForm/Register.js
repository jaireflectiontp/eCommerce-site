import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { registerUser } from '../../services/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/styles/form.scss'
const RegistrationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSubmit = (values, { setSubmitting }) => {
        dispatch(registerUser(values));
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(values);
        localStorage.setItem('users', JSON.stringify(users));
        setSubmitting(false);
        navigate('/signin')
    };

    return (
        <div className="formControl">
            <h3>Create an Account</h3>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    city: '',
                    pinCode: '',
                    state: '',
                    phoneNumber: '',
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.firstName) {
                        errors.firstName = 'Required';
                    }
                    if (!values.lastName) {
                        errors.lastName = 'Required';
                    }
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.password) {
                        errors.password = 'Required';
                    } else if (values.password.length < 8) {
                        errors.password = 'Password must be at least 8 characters long';
                    }

                    if (!values.city) {
                        errors.city = 'Required';
                    }

                    if (!values.pinCode) {
                        errors.pinCode = 'Required';
                    }

                    if (!values.state) {
                        errors.state = 'Required';
                    }

                    if (!values.phoneNumber) {
                        errors.phoneNumber = 'Required';
                    }

                    return errors;
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="field-wrapper">
                        <div className='inputControl'>
                            <label htmlFor="firstName">FirstName</label>
                            <Field type="text" name="firstName" />
                            <ErrorMessage className='error-msg' name="firstName" component="div" />
                        </div>
                        <div className='inputControl'>
                            <label htmlFor="lastName">LastName</label>
                            <Field type="text" name="lastName" />
                            <ErrorMessage className='error-msg' name="lastName" component="div" />
                        </div>
                    </div>

                    <div className="field-wrapper">
                        <div className='inputControl'>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" />
                            <ErrorMessage className='error-msg' name="email" component="div" />
                        </div>
                        <div className='inputControl'>
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <Field type="text" name="phoneNumber" />
                            <ErrorMessage className='error-msg' name="phoneNumber" component="div" />
                        </div>
                    </div>

                    <div className="field-wrapper">
                        <div className='inputControl'>
                            <label htmlFor="city">City</label>
                            <Field type="text" name="city" />
                            <ErrorMessage className='error-msg' name="city" component="div" />
                        </div>
                        <div className='inputControl'>
                            <label htmlFor="state">State</label>
                            <Field type="text" name="state" />
                            <ErrorMessage className='error-msg' name="state" component="div" />
                        </div>
                    </div>

                    <div className="field-wrapper">
                        <div className='inputControl'>
                            <label htmlFor="pinCode">Pin Code</label>
                            <Field type="text" name="pinCode" />
                            <ErrorMessage className='error-msg' name="pinCode" component="div" />
                        </div>
                        <div className='inputControl'>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" />
                            <ErrorMessage className='error-msg' name="password" component="div" />
                        </div>
                    </div>

                    <button type="submit">Register</button>
                    <div className="redirect-to-next">
                        Have an account? <Link to='/signin'>Sign_In</Link>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default RegistrationForm;
