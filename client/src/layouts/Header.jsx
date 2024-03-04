import { useState } from "react"
import { flag, logo } from "../assets/assets"
import { Link } from 'react-router-dom'
const Header = () => {
    const [showSearchTab, setShowSearchTab] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

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
                        <button className="absolute right-0  bg-primary w-14 h-11 rounded-r text-white">df</button>
                        <div className={`searchResults absolute w-full h-full ${showSearchTab ? 'block' : 'hidden'}`}>
                            <div style={{ width: `calc(100% - ${56}px)` }} className="bg-slate-500 p-4">sdsd</div>
                        </div>
                    </form>
                    <div className="flex items-center justify-between w-full lg:w-fit xl:w-fit">
                        <button onClick={() => setIsOpen(true)} className="lg:hidden">X</button>
                        <div className="flex items-center ">
                            <ul>
                                <li className="accountTab relative">
                                    <a href="#" className="py-3 ps-2 pe-8">Account</a>
                                    <ul style={{ display: 'none' }} className="absolute w-28 top-8 left-auto rounded-md bg-slate-400 p-4 text-xs font-light">
                                        <li><Link to='/signup'>Sign up</Link></li>
                                        <li className="py-3"><Link to='/signin'>Login</Link></li>
                                        <li><Link to='/checkout'>Checkout</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <a href="#" className="py-3 ps-2 pe-8">WishList</a>
                            <a href="#" className="py-3 ps-2 pe-8">Cart</a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center py-4 text-sm">
                    <div className={`overLay bg-black opacity-80 w-full h-full fixed top-0 left-0 z-10 block ${isOpen ? 'block' : 'hidden'}`}></div>
                    <nav className={`header-navigation sm:bg-transparent bg-primary absolute sm:static top-0 left-0 w-3/4 sm:w-auto h-full sm:h-auto z-20 ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="sm:hidden flex justify-between items-center py-8 px-6 border-b-[1px]"><span>Menu</span> <button onClick={() => setIsOpen(!isOpen)}>X</button></div>
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
        </>
    )
}

export default Header

