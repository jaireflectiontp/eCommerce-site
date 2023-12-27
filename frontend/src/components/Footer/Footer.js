import React from 'react'
import logo from '../../assets/images/logo.png'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import '../../assets/styles/footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
    const liStyle = {
        listStyle: 'none'
    }
    return (
        <>
            <div className="container">
                <div className='text-start'>
                    <img src={logo} alt="logo" style={{ width: '150px' }} />
                </div>
                <Row className='my-3'>
                    <Col className='text-start px-5 my-3'>
                        <h4>Company</h4>
                        <ul className='footer-list' style={{ margin: '25px 0 0', padding: '0' }}>
                            <li style={liStyle}> About Us</li>
                            <li style={liStyle}> Careers </li>
                            <li style={liStyle}> Terms & Conditions</li>
                            <li style={liStyle}> Privacy & Policy</li>
                            <li style={liStyle}> Blogs</li>
                        </ul>
                    </Col>
                    <Col className='text-start px-5 my-3'>
                        <h4>Customer Service</h4>
                        <ul className='footer-list' style={{ margin: '25px 0 0', padding: '0' }}>
                            <li style={liStyle}> Contact Us</li>
                            <li style={liStyle}> Track Order </li>
                            <li style={liStyle}> Return Order</li>
                            <li style={liStyle}> Cancel Order</li>
                            <li style={liStyle}> FAQ</li>

                        </ul>
                    </Col>
                    <Col className='text-start px-5 my-3'>
                        <h4>Connect With Us</h4>
                        <ul className='footer-list' style={{ margin: '25px 0 0', padding: '0' }}>
                            <li style={liStyle}><input type="text" /><button>SUBSCRIBE</button></li>
                            <li style={liStyle}>
                                <span><FacebookIcon /></span>
                                <span><InstagramIcon /></span>
                                <span><PinterestIcon /></span>
                                <span><TwitterIcon /></span>
                            </li>
                        </ul>
                    </Col>

                </Row>
            </div>

        </>
    )
}

export default Footer
