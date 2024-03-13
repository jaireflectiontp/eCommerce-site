import { faBagShopping, faEye, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import '../App.css'

const ProductCard = () => {
    return (
        <div className="card mb-6 px-3 w-full sm:w-1/2 lg:w-1/4">
            <div className="p-3 border-[1px] border-secondary rounded-[5px] flex flex-col h-full">
                <div className="relative productImg">
                    <div className="w-full h-full flex justify-center items-center rounded-[5px]">
                        <img src="https://th.bing.com/th/id/OIP.yBhNWRpWUIeADG1rpWs6WQHaFS?w=256&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                            className="w-full h-full rounded-[5px] aspect-square"
                            alt="" />
                    </div>
                    <div className="viewTab grid gap-[5px] z-20 absolute top-3 right-[-50px] opacity-0">
                        <button className="border-[1px] border-secondary focus:border-primary rounded-full w-[35px] h-[35px] text-primary focus:text-white bg-white focus:bg-primary">
                            <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button className="border-[1px] border-secondary focus:border-primary rounded-full w-[35px] h-[35px] text-primary focus:text-white bg-white focus:bg-primary">
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
                    <button className="border-[1px] border-secondary focus:border-primary rounded-full w-[35px] h-[35px] absolute left-1/2 -translate-x-1/2 -bottom-4 text-primary focus:text-white bg-white focus:bg-primary">
                        <FontAwesomeIcon icon={faBagShopping} />
                    </button>
                </div>
                <div className="pt-5 lg:pt-6">
                    <div>
                        <p className="text-[13px] mb-[5px] text-light text-center">Cloth</p>
                        <div className="mb-3 text-center">star</div>
                    </div>
                    <Link to='' className="text-[15px] font-medium text-dark hover:text-primary block text-center">
                        Fresh organic villa farm lomon 500gm pack
                    </Link>
                    <p className="text-sm mt-3 font-bold text-primary text-center">$123.2</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
