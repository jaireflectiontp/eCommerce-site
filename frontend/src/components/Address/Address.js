import React from 'react'
import "../../assets/styles/index.scss"
import { useSelector } from 'react-redux'
const Address = () => {
    const userProfile = useSelector((state) => state.auth.currentUser)
    console.log(userProfile)
    return (
        <>
            <h5 className='text-start mb-4'>My Address Book</h5>
            <div className="personal-details-wrapper">
                <h5 className='text-start text-capitalize small'>address</h5>
                <hr />
                <div className="detail-section mb-5">
                    <div className="detail-card row">
                        <div className="col-6 p-0">
                            <p><span>City : </span></p>
                            <p><span>State :</span></p>
                            <p><span>Pin Code :</span></p>
                        </div>
                        <div className="col-6 p-0 text-start">
                            <p>{userProfile.city}</p>
                            <p>{userProfile.state}</p>
                            <p>{userProfile.pinCode}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address
