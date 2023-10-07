import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../services/slices/authSlice';
const AccountPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logoutUser())
        navigate('/')
    }

    return (

        <div className="container" style={{ border: '1px solid' }}>
            <div className="account-wrapper d-flex flex-lg-row flex-xs-column flex-sm-column flex-md-column" style={{ border: '1px solid' }}>
                <div className="account-sideBar w-25 px-3 py-4 text-start">
                    <h5 className='mb-4'>My Account</h5>
                    <ul className=''>
                        <li><NavLink to='profile' className='text-black text-decoration-none'>Personal Information</NavLink></li>
                        <li><NavLink to='address' className='text-black text-decoration-none'>Address Book</NavLink></li>
                    </ul>
                    <Button variant="outlined" onClick={logOut}>Log Out</Button>
                </div>
                <div className="account-content w-75">
                    <Outlet />
                </div>
            </div>
        </div>

    )
}

export default AccountPage
