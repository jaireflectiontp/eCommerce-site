import { useState } from "react"
import { flag, logo } from "../assets/assets"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faHeart, faMagnifyingGlass, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { CartItem } from "../components"
import '../App.css'
const Header = () => {
    const [showSearchTab, setShowSearchTab] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    return (
        <>
            <div className="container mx-auto px-4 lg:px-3">
                <div className="flex flex-wrap justify-center gap-4 sm:gap-0  sm:justify-between items-center py-5">
                    <a href="#"><img src={logo} alt="" className="w-36" /></a>
                    <form action="search" className="relative font-normal">
                        <input type="text"
                            placeholder="Search for product.."
                            className="w-[400px] xl:w-[600px] h-[45px] border-[1px] border-solid border-primary rounded ps-4 pe-16 outline-none"
                            onChange={() => setShowSearchTab(true)}
                            onBlur={() => setShowSearchTab(false)}
                        />
                        <button className="absolute right-0  bg-primary w-14 h-11 rounded-r text-white"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        <div className={`searchResults absolute w-full h-full ${showSearchTab ? 'block' : 'hidden'}`}>
                            <div style={{ width: `calc(100% - ${56}px)` }} className="bg-slate-500 p-4">sdsd</div>
                        </div>
                    </form>
                    <div className="flex items-center justify-between w-full lg:w-fit xl:w-fit">
                        <button onClick={() => setIsOpen(true)} className="lg:hidden"><FontAwesomeIcon icon={faBars} /></button>
                        <div className="flex items-center ">
                            <ul>
                                <li className="accountTab relative">
                                    <span className="py-3 sm:ps-2 ps-8 sm:pe-8 pe-0"><FontAwesomeIcon icon={faUser} /><span className="hidden sm:inline pl-2">Account</span></span>
                                    <ul style={{ display: 'none' }} className="absolute w-28 top-8 left-auto rounded-md bg-slate-400 p-4 text-xs font-light">
                                        <li><Link to='/signup'>Sign up</Link></li>
                                        <li className="py-3"><Link to='/signin'>Login</Link></li>
                                        <li><Link to='/checkout'>Checkout</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <button type="button" className="py-3 sm:ps-2 ps-8 sm:pe-8 pe-0"><FontAwesomeIcon icon={faHeart} /><span className="hidden sm:inline pl-2">Wishlist</span></button>
                            <button type="button" className="py-3 sm:ps-2 ps-8 sm:pe-8 pe-0" onClick={() => setIsCartOpen(true)}><FontAwesomeIcon icon={faCartShopping} /><span className="hidden sm:inline pl-2">Cart</span></button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center py-4 text-sm">
                    <div className={`overLay bg-black opacity-80 w-full h-full fixed top-0 left-0 z-10 block ${isOpen ? 'block' : 'hidden'}`}></div>
                    <nav className={`header-navigation sm:bg-transparent bg-primary absolute sm:static top-0 left-0 w-3/4 sm:w-auto h-full sm:h-auto z-20 ${isOpen ? 'block' : 'hidden sm:block'}`}>
                        <div className="sm:hidden flex justify-between items-center py-8 px-6 border-b-[1px]"><span>Menu</span> <button onClick={() => setIsOpen(!isOpen)}><FontAwesomeIcon icon={faXmark} /></button></div>
                        <ul className="flex gap-1 sm:gap-6 sm:flex-row flex-col p-8 sm:p-0">
                            <li className="border-b-[1px] sm:border-b-0"><a href="#" className="px-2 py-3 inline-block sm:inline">Home</a></li>
                            <li className="border-b-[1px] sm:border-b-0"><a href="#" className="px-2 py-3 inline-block sm:inline">Products</a></li>
                            <li className="border-b-[1px] sm:border-b-0"><a href="#" className="px-2 py-3 inline-block sm:inline">About Us</a></li>
                            <li className="border-b-[1px] sm:border-b-0"><a href="#" className="px-2 py-3 inline-block sm:inline">Contact Us</a></li>
                            <li className="border-b-[1px] sm:border-b-0"><a href="#" className="px-2 py-3 inline-block sm:inline">Faq</a></li>
                            <li className="border-b-[1px] sm:border-b-0"><a href="#" className="px-2 py-3 inline-block sm:inline">Policy</a></li>
                        </ul>
                    </nav>
                    <div className="hidden sm:flex gap-1"><img src={flag} alt="" className="w-5" />+91 8822000454</div>
                </div>
            </div>


            <div className={`fixed top-0 right-0 h-full z-20 bg-slate-200 ${isCartOpen ? 'block' : 'hidden'}`}>
                <div className="px-5 w-[300px] sm:w-[350px] h-full flex flex-col gap-4">
                    <div className="h-3/4">
                        <div className="flex justify-between py-4 mb-4 border-b-[1px] border-gray-400">
                            <h6>My Cart</h6>
                            <button className="px-4" onClick={() => setIsCartOpen(false)}><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                        <ul className="cartItem_list overflow-y-scroll h-[85%]">
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </ul>
                    </div>
                    <div className="h-1/4 border-t-[1px] border-gray-400 px-3">
                        <div className="mt-5 mb-7 pb-2">
                            <div className="mt-2 flex justify-between items-center text-lg">
                                <strong>Sub Total:</strong>
                                <strong>256525</strong>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button type="button" className="inline-flex items-center rounded-md bg-primary px-5 py-[10px] text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                View Cart
                            </button>
                            <button type="button" className="inline-flex items-center rounded-md bg-transparent px-5 py-[10px] text-sm font-semibold border-[1px] border-primary hover:border-black text-primary hover:text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header

