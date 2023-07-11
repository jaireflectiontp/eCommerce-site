import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { loginUser } from '../../services/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/styles/form.scss'
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
        <div className="formControl login-form">
            <h3>Sign In</h3>
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
                    <div className="field-wrapper">
                        <div className='inputControl'>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" />
                            <ErrorMessage className='error-msg' name="email" component="div" />
                        </div>
                    </div>
                    <div className="field-wrapper">
                        <div className='inputControl'>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" />
                            <ErrorMessage className='error-msg' name="password" component="div" />
                        </div>
                    </div>
                    <button type="submit">Login</button>
                    <div className="redirect-to-next">
                        New Member? <Link to='/signup'>Create an Account</Link>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginForm;

