import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { registerUser } from '../../../services/slices/authSlice';
import { useNavigate } from 'react-router-dom';

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
        <Formik
            initialValues={{
                email: '',
                password: '',
                city: '',
                pinCode: '',
                state: '',
                address: '',
                phoneNumber: '',
            }}
            validate={(values) => {
                const errors = {};

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

                if (!values.address) {
                    errors.address = 'Required';
                }

                if (!values.phoneNumber) {
                    errors.phoneNumber = 'Required';
                }

                return errors;
            }}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                </div>

                <div>
                    <label htmlFor="city">City</label>
                    <Field type="text" name="city" />
                    <ErrorMessage name="city" component="div" />
                </div>

                <div>
                    <label htmlFor="pinCode">Pin Code</label>
                    <Field type="text" name="pinCode" />
                    <ErrorMessage name="pinCode" component="div" />
                </div>

                <div>
                    <label htmlFor="state">State</label>
                    <Field type="text" name="state" />
                    <ErrorMessage name="state" component="div" />
                </div>

                <div>
                    <label htmlFor="address">address</label>
                    <Field type="text" name="address" />
                    <ErrorMessage name="address" component="div" />
                </div>

                <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Field type="text" name="phoneNumber" />
                    <ErrorMessage name="phoneNumber" component="div" />
                </div>

                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
};

export default RegistrationForm;
