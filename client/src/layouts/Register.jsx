import { Link } from "react-router-dom"
import { formLogo } from "../assets/assets"

const Register = () => {
    return (
        <div className="px-2 sm:px-5 block sm:flex justify-center">
            <div className="p-7 border-[1px] rounded-md">
                <h2 className="flex text-3xl mb-8 justify-center gap-1"><img src={formLogo} style={{ width: '35px', height: '35px' }} alt="" />Sign Up</h2>
                <form className="space-y-6 " action="#" method="POST">
                    <div className="sm:w-[564px]">
                        <div className="mb-6 w-full flex flex-col sm:flex-row gap-6 sm:gap-0">
                            <div className="flex-1 px-0 sm:px-2 w-full">
                                <label className="block text-base font-medium leading-6 text-gray-900">First Name*</label>
                                <div className="mt-2">
                                    <input id="firstname" placeholder="Enter Your First Name" name="firstname" type="text" autoComplete="firstname" required className="block font-normal w-full rounded-[4px] py-2 px-3 text-gray-900 border-[1px] outline-0 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="flex-1 px-0 sm:px-2">
                                <label className="block text-base font-medium leading-6 text-gray-900">Last Name*</label>
                                <div className="mt-2">
                                    <input id="lastname" placeholder="Enter Your Last Name" name="lastname" type="text" autoComplete="lastname" required className="block font-normal w-full rounded-[4px] py-2 px-3 text-gray-900 border-[1px] outline-0 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 flex flex-col sm:flex-row gap-6 sm:gap-0">
                            <div className="flex-1 px-0 sm:px-2">
                                <label className="block text-base font-medium leading-6 text-gray-900">Email*</label>
                                <div className="mt-2">
                                    <input id="email" placeholder="Enter Your Email" name="email" type="text" autoComplete="email" required className="block font-normal w-full rounded-[4px] py-2 px-3 text-gray-900 border-[1px] outline-0 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="flex-1 px-0 sm:px-2">
                                <label className="block text-base font-medium leading-6 text-gray-900">Phone Number*</label>
                                <div className="mt-2">
                                    <input id="phone" placeholder="Enter Your Phone Number" name="phone" type="text" autoComplete="phone" required className="block font-normal w-full rounded-[4px] py-2 px-3 text-gray-900 border-[1px] outline-0 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-base font-medium leading-6 text-gray-900">Address*</label>
                            <div className="mt-2">
                                <input id="address" placeholder="Enter Your Address" name="address" type="text" autoComplete="address" required className="block font-normal w-full rounded-[4px] py-2 px-3 text-gray-900 border-[1px] outline-0 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="mb-6 flex flex-col sm:flex-row gap-6 sm:gap-0">
                            <div className="flex-1 px-0 sm:px-2">
                                <label className="block text-base font-medium leading-6 text-gray-900">City*</label>
                                <div className="mt-2">
                                    <input id="city" placeholder="City" name="city" type="text" autoComplete="city" required className="block font-normal w-full rounded-[4px] py-2 px-3 text-gray-900 border-[1px] outline-0 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="flex-1 px-0 sm:px-2">
                                <label className="block text-base font-medium leading-6 text-gray-900">Post Code*</label>
                                <div className="mt-2">
                                    <input id="postcode" placeholder="Post Code" name="postcode" type="text" autoComplete="postcode" required className="block font-normal w-full rounded-[4px] py-2 px-3 text-gray-900 border-[1px] outline-0 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 flex flex-col sm:flex-row gap-6 sm:gap-0">
                            <div className="flex-1 px-0 sm:px-2">
                                <label className="block text-base font-medium leading-6 text-gray-900">Region/State*</label>
                                <div className="mt-2">
                                    <input id="state" placeholder="Region/State" name="state" type="text" autoComplete="state" required className="block font-normal w-full rounded-[4px] py-2 px-3 text-gray-900 border-[1px] outline-0 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="flex-1 px-0 sm:px-2">
                                <label className="block text-base font-medium leading-6 text-gray-900">Country*</label>
                                <div className="mt-2">
                                    <input id="country" placeholder="Country" name="country" type="text" autoComplete="country" required className="block font-normal w-full rounded-[4px] py-2 px-3 text-gray-900 border-[1px] outline-0 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between px-0 sm:px-2">
                            <button type="button" className="inline-flex items-center rounded-md bg-primary px-5 py-[10px] text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Signup
                            </button>
                            <Link className="text-light font-normal" to='/signin'>Have an account?</Link>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
