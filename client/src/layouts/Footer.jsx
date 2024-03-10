import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { facebook, instagram, logo, pinterst, twitter } from "../assets/assets"


const Footer = () => {
    return (
        <div className="pt-24 bg-secondary border-t-[1px] border-gray-300">
            <div className="container mx-auto px-3">
                <div className="pb-24 flex flex-wrap">
                    <div className="w-full lg:w-1/2 xl:w-2/6 px-2 text-sm font-normal text-light ">
                        <div>
                            <div className="pb-[15px]">
                                <img className="w-[130px] h-[40px]" src={logo} alt="" />
                            </div>
                            <p>Stop & Shop is the biggest market of clothing products. Get your daily needs from our store.</p>
                        </div>

                        <div>
                            <ul>
                                <li className="mt-6 mb-3 pl-[30px] relative">
                                    <span className="absolute top-1/2 left-0 -translate-y-1/2">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                    </span>
                                    51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
                                </li>
                                <li className="mb-3 pl-[30px] relative">
                                    <span className="absolute top-1/2 left-0 -translate-y-1/2">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                    example@email.com
                                </li>
                                <li className="mb-0 pl-[30px] relative">
                                    <span className="absolute top-1/2 left-0 -translate-y-1/2">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </span>
                                    +91 123 4567890
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-1/6 px-2">
                        <div>
                            <h4 className="mb-4 font-bold text-lg">Company</h4>
                            <ul className="text-sm text-light font-normal">
                                <li className="mb-3">
                                    <Link>About Us</Link>
                                </li>
                                <li className="mb-3">
                                    <Link>Delivery Information</Link>
                                </li>
                                <li className="mb-3">
                                    <Link>Privacy Policy</Link>
                                </li>
                                <li className="mb-3">
                                    <Link>Terms & Conditions</Link>
                                </li>
                                <li className="mb-3">
                                    <Link>Contact Us</Link>
                                </li>
                                <li className="mb-0">
                                    <Link>Support Center</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-1/6 px-2">
                        <div className="lg:mt-12 xl:mt-0">
                            <h4 className="mb-4 font-bold text-lg">Category</h4>
                            <ul className="text-sm text-light font-normal">
                                <li className="mb-3">
                                    <Link>Fashion & Clothes</Link>
                                </li>
                                <li className="mb-3">
                                    <Link>Dairy & Bakery</Link>
                                </li>
                                <li className="mb-3">
                                    <Link>Fruits & Vegetable</Link>
                                </li>
                                <li className="mb-3">
                                    <Link>Terms & Conditions</Link>
                                </li>
                                <li className="mb-3">
                                    <Link>Contact Us</Link>
                                </li>
                                <li className="mb-0">
                                    <Link>Support Center</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-2/6 px-2">
                        <div className="lg:mt-12 xl:mt-0">
                            <h4 className="mb-4 font-bold text-lg">NewsLetter</h4>
                            <div className="text-sm font-normal text-light font-normal">
                                <p className="mb-[5px]">Subscribe to get in touch.</p>
                                <form className="border-[1px] border-gray-300 rounded-md relative w-4/5">
                                    <input type="text"
                                        placeholder="Enter your email here..."
                                        className="h-11 w-full py-[5px] px-4 rounded-md outline-0"
                                    />
                                    <span className="text-lg py-2 px-4 absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer hover:text-primary">
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </span>
                                </form>
                            </div>
                            <div className="my-6 flex items-center justify-start gap-3">
                                <Link className="w-9 h-9 grid place-items-center">
                                    <img className="max-h-full max-w-full" src={facebook} alt="" />
                                </Link>
                                <Link className="w-9 h-9 grid place-items-center">
                                    <img className="max-h-full max-w-full" src={instagram} alt="" />
                                </Link>
                                <Link className="w-9 h-9 grid place-items-center">
                                    <img className="max-h-full max-w-full" src={twitter} alt="" />
                                </Link>
                                <Link className="w-9 h-9 grid place-items-center">
                                    <img className="max-h-full max-w-full" src={pinterst} alt="" />
                                </Link>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full p-4">
                    <p className="text-center py-3">
                        © 2024 Stop & Shop, All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
