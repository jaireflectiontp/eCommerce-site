import { Link } from "react-router-dom"
import { CartItem } from "../components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"


const Cart = () => {
    return (
        <section className="pt-24">
            <div className="container mx-auto px-3">
                <div className="border-[1px] rounded-md overflow-x-scroll">
                    <table className="w-full overflow-hidden rounded-md">
                        <thead className="bg-slate-200">
                            <tr className="text-left">
                                <th className="p-[15px]">Product</th>
                                <th className="p-[15px]">Price</th>
                                <th className="p-[15px] text-center">Quantity</th>
                                <th className="p-[15px]">Total</th>
                                <th className="p-[15px] text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-slate-50">
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between items-center py-2 my-4">
                    <Link to='/products'
                        className="inline-flex items-center rounded-md bg-transparent px-5 py-[10px] text-sm font-semibold border-[1px] border-primary hover:border-black text-primary hover:text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Continue Shopping
                    </Link>
                    <Link
                        to='/checkout'
                        className="inline-flex items-center rounded-md bg-primary px-5 py-[10px] text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Checkout&nbsp;<FontAwesomeIcon icon={faArrowRightLong} />
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default Cart
