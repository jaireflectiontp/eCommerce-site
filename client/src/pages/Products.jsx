import { faFilter, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Pagination, ProductCard } from "../components"


const Products = () => {
    const navigate = useNavigate()
    const [openFilter, setOpenFilter] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(8)
    const [products, setProducts] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    let lastIndex = currentPage * productsPerPage
    let startIndex = lastIndex - productsPerPage
    const currentPageProducts = products?.slice(startIndex, lastIndex)
    const totalPages = Math.ceil(products?.length / productsPerPage)

    return (
        <section className="py-24">
            <div className={`overLay bg-black opacity-80 w-full h-full fixed top-0 left-0 z-10 block ${openFilter ? 'block' : 'hidden'}`}></div>
            <div className={`fixed top-0 left-0 h-full z-20 bg-white ${openFilter ? 'block' : 'hidden'}`}>
                <div className="px-5 w-[300px] sm:w-[350px] h-full flex flex-col gap-4">
                    <div className="h-full overflow-y-scroll">
                        <div className="flex justify-between py-4 border-b-[1px] border-secondary">
                            <h6 className="font-bold">Filters</h6>
                            <button className="px-4 text-red-500" onClick={() => setOpenFilter(false)}><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                        <div className="p-6 bg-[#f7f7f8]">
                            <div>
                                <h4 className="pb-2 text-lg font-medium border-b-[1px] border-secondary text-dark">Category</h4>
                                <div className="pt-7 text-sm text-light">
                                    <div className="mb-[15px] flex items-center">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">all</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">all</label>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <h4 className="pb-2 text-lg font-medium border-b-[1px] border-secondary text-dark">Price</h4>
                                <div className="mt-7 text-sm text-light">
                                    <div>-------------</div>
                                    <p className="my-5"></p>
                                    <button type="button"
                                        className="inline-flex items-center rounded-md bg-primary px-5 py-[10px] text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Filter
                                    </button>
                                </div>
                            </div>

                            <div className="pt-6">
                                <h4 className="pb-2 text-lg font-medium border-b-[1px] border-secondary text-dark">Clothing Type</h4>
                                <div className="pt-7 text-sm text-light">
                                    <div className="mb-[15px] flex items-center">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">T-Shirt</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Hoodie</label>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <h4 className="pb-2 text-lg font-medium border-b-[1px] border-secondary text-dark">Design</h4>
                                <div className="pt-7 text-sm text-light">
                                    <div className="mb-[15px] flex items-center">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Solid</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Printed</label>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <h4 className="pb-2 text-lg font-medium border-b-[1px] border-secondary text-dark">Brands</h4>
                                <div className="pt-7 text-sm text-light">
                                    <div className="mb-[15px] flex items-center">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Nike</label>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Adidas</label>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Zara</label>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Puma</label>
                                    </div>
                                    <div className="mb-[15px] flex items-center">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">H&M</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Supreme</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container mx-auto px-3">
                <div>
                    <div className="px-3">
                        <div className="flex justify-between mb-7 border-[1px] border-secondary rounded-md bg-[#f7f7f8]">
                            <div className="m-[5px]">
                                <button type="button"
                                    onClick={() => setOpenFilter(true)}
                                    className="flex items-center rounded-md bg-dark w-[35px] h-[35px] justify-center text-xl font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    <FontAwesomeIcon icon={faFilter} />
                                </button>
                            </div>
                            <div className="m-[5px] h-[35px] py-[3px] pl-[15px] pr-2 text-[15px] bg-white text-light font-normal border-[1px] rounded-[5px]">
                                <label htmlFor="sort">Sort By:</label>
                                <select className="pl-3 pr-2 outline-0">
                                    <option selected>Featured</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="4">Four</option>
                                    <option value="5">Five</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        {
                            currentPageProducts?.map((el) => (
                                <ProductCard key={el.id} img={el.image} openModal={openModal} setOpenModal={setOpenModal} />
                            ))
                        }

                    </div>

                    <div className="flex justify-center mt-4">
                        <Pagination
                            totalPages={totalPages}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>
            </div>

            <div className={`bg-[#1211117d]  fixed top-0 left-0 w-full h-full z-[999] ${openModal ? 'block' : 'hidden'}`}>
                <div className="max-w-[500px] md:max-w-[720px] lg:max-w-[960px] w-full flex items-center h-full py-[30px] px-[15px] md:p-[35px] mx-auto">
                    <div className="relative w-full bg-white rounded-md flex flex-col">
                        <button
                            onClick={() => setOpenModal(!openModal)}
                            className="px-4 w-[5px] h-[5px] text-dark absolute top-2 right-2 z-[5]">
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <div className="p-6">
                            <div className="flex flex-wrap">
                                <div className="px-3 w-full md:w-5/12 flex-[0px 0px auto]">
                                    <div className="h-full flex items-center bg-[#f7f7f8] border-[1px] rounded-md">
                                        <img className="w-full h-full rounded-md" src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1jMVMm.img?w=768&h=432&m=6&x=522&y=286&s=97&d=97" alt="" />
                                    </div>
                                </div>
                                <div className="px-3 w-full md:w-7/12 flex-[0px 0px auto]">
                                    <div className="mt-6 pb-5">
                                        <h2 className="text-xl xl:text-[26px] font-medium mb-[15px]">werwerwerw</h2>
                                        <p className="text-light text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error doloremque non cumque perspiciatis assumenda modi! Provident ipsa saepe commodi nobis.</p>
                                    </div>
                                    <div className="pt-5">
                                        <div>sdfsdfdsf</div>
                                        <div className="pt-5 text-[22px] md:text-2xl">ghgfhfgh</div>
                                        <div className="pt-5">ghgfhfgh</div>
                                        <div className="pt-5">ghgfhfgh</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Products

