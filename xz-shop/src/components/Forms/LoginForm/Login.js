import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { loginUser } from '../../../services/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.auth);
    const [userData, setUserData] = useState();
    const navigate = useNavigate()
    const handleSubmit = (values, { setSubmitting }) => {
        setUserData(userList.users);
        console.log("userData", userData);
        userData?.map((getUser) => {

            if (getUser.username === values.username &&
                getUser.password === values.password) {
                dispatch(loginUser(getUser));
                setSubmitting(false);
                navigate('/')
            }
        }
        )
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={(values) => {
                const errors = {};

                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }

                if (!values.password) {
                    errors.password = 'Required';
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

                <button type="submit">Login</button>
            </Form>
        </Formik>
    );
};

export default LoginForm;

