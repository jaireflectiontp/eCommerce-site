import React from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../services/slices/authSlice';
import "../../assets/styles/index.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
const AccountPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userProfile = useSelector((state) => state.auth.currentUser)
    console.log(userProfile)
    const logOut = () => {
        dispatch(logoutUser())
        navigate('/')
    }

    let currentLink = ''
    let crumbs = location.pathname.split('/')
        .filter((crumb) => crumb !== '')
        .map((crumb) => {
            currentLink += `/${crumb}`
            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        })

    return (

        <div className="container py-3" >
            <h3 className='mb-4 text-start'>My Account</h3>
            <div className="account-wrapper d-flex flex-lg-row flex-xs-column flex-sm-column flex-md-column" >
                <div className="account-sideBar w-25 px-3 py-4 text-start">

                    <ul className='m-0 p-0 list-unstyled'>
                        <li className='mb-4'>
                            <NavLink to='profile' className='text-black text-decoration-none acc-navlink fw-medium'><AccountCircleIcon /> My Details</NavLink>
                        </li>

                        <li className='mb-4'>
                            <NavLink to='address' className='text-black text-decoration-none acc-navlink fw-medium'><PersonPinCircleIcon /> My Address Book</NavLink>
                        </li>
                    </ul>
                    <Button variant="outlined" onClick={logOut}>Log Out</Button>
                </div>
                <div className="account-content w-75 p-4">
                    <div className="account-content-wrapper py-5 px-4 ">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AccountPage
