import React from 'react'
import "../../assets/styles/index.scss"
import { useSelector } from 'react-redux'
const Profile = () => {
    const userProfile = useSelector((state) => state.auth.currentUser)
    console.log(userProfile)
    return (
        <>
            <h5 className='text-start mb-4'>My Details</h5>
            <div className="personal-details-wrapper">
                <h5 className='text-start text-capitalize small'>personal information</h5>
                <hr />
                <div className="detail-section mb-5">
                    <div className="detail-card row">
                        <div className="col-6 p-0">
                            <p><span>First Name : </span></p>
                            <p><span>Last Name :</span></p>
                            <p><span>Contact Number :</span></p>
                        </div>
                        <div className="col-6 p-0 text-start">
                            <p>{userProfile.firstName}</p>
                            <p>{userProfile.lastName}</p>
                            <p>{userProfile.phoneNumber}</p>
                        </div>
                    </div>
                </div>
                <h5 className='text-start text-capitalize small'>e-mail address</h5>
                <hr />
                <div className="detail-section">
                    <div className="detail-card row">
                        <div className="col-6 p-0">
                            <p><span>E-Mail Address : </span></p>

                        </div>
                        <div className="col-6 p-0 text-start">
                            <p>{userProfile.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
