import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CartItem = () => {
    return (
        <li className="mb-5 pb-5 flex items-center border-b-[1px] border-gray-400">
            <a href="#" className="flex-1 basis-1/5">
                <img src="https://healthjade.com/wp-content/uploads/2017/10/apple-fruit.jpg"
                    className="w-[75px] h-[75px]"
                    alt="" />
            </a>
            <div className="h-[86px] flex flex-col flex-1 basis-[70%] pl-4 relative">
                <a href="#" className="pr-7">sdfsdfdsfsdfsd</a>
                <span>ssdfsdfsdfsdf</span>
                <div className="mt-1">
                    <div className="h-[30px] w-24 flex items-center justify-evenly border border-slate-800 rounded">
                        <button>+</button>
                        <input type="text" className="w-[30px]" />
                        <button>-</button>
                    </div>
                </div>

                <button className="w-7 h-4 text-xs absolute top-0 right-0 text-red-600"><FontAwesomeIcon icon={faXmark} /></button>
            </div>
        </li>
    )
}

export default CartItem
