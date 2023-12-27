import React from 'react'
import '../../assets/styles/contact.scss'
import csupport from "../../assets/images/csupport.jpg"
const ContactPage = () => {
    return (
        <div className='contact-page'>
            <div className="g-map-wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212743.6154082103!2d77.48026685738341!3d12.957805887657742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1689102745424!5m2!1sen!2sin" className='g-map' style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-container">
                <div className="contact-container-in">
                    <div className="contact-details"><img className='w-100' src={csupport} alt="" /></div>
                    <div className="contact-form">
                        <form action="https://formspree.io/f/mleyeobr" method='post'>
                            <input type="text" name="name" placeholder='Enter your full name' required autoComplete='off' />
                            <input type="email" name='email' placeholder='Enter Your Email' required autoComplete='off' />
                            <textarea name="message" cols="30" rows="10" placeholder='Enter your message' required autoComplete='off'></textarea>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
