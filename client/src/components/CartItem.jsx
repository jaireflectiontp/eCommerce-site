import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


const CartItem = () => {
    return (
        <tr>
            <td className="py-[25px] px-[14px] w-2/4">
                <Link className="flex gap-3 items-center" to='/'>
                    <img src="https://th.bing.com/th/id/R.a191c95019c9c3e1abdd5c26a4271516?rik=SzTEa5RlQGMnZQ&pid=ImgRaw&r=0"
                        alt="product-1"
                        className="w-[60px] h-[60px]"
                    />
                    Organic Lemon
                </Link>
            </td>
            <td className="py-[25px] px-[14px]">
                <span >$56.00</span>
            </td>
            <td className="py-[25px] px-[14px]">
                <div className="h-[30px] w-[80px] mx-auto flex items-center justify-evenly border border-slate-800 rounded">
                    <button>+</button>
                    <input type="text" className="w-[30px] text-center" placeholder="." value='1' />
                    <button>-</button>
                </div>
            </td>
            <td className="py-[25px] px-[14px]">$56.00</td>
            <td className="py-[25px] px-[14px] text-center">
                <button><FontAwesomeIcon icon={faTrashCan} /></button>
            </td>
        </tr>
    )
}

export default CartItem
