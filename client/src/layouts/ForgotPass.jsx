import { Link } from "react-router-dom"
import { passForgot } from "../assets/assets"


const ForgotPass = () => {
    return (
        <div className="px-5 flex justify-center">
            <div className="p-7 border-[1px] rounded-md">
                <h2 className="flex text-2xl mb-8 justify-center gap-1"><img src={passForgot} style={{ width: '35px', height: '35px' }} alt="" />Forgot Password</h2>
                <form className="space-y-6 " action="#" method="POST">
                    <div className="sm:w-[340px] w-80">
                        <div className="mb-6">
                            <label className="block text-base font-medium leading-6 text-gray-900">Email Address*</label>
                            <div className="mt-2">
                                <input id="email" placeholder="Enter Your Email" name="email" type="email" autoComplete="email" required className="block font-normal w-full rounded-[4px] py-2 px-3 text-gray-900 border-[1px] outline-0 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <button type="button" className="inline-flex items-center rounded-md bg-primary px-5 py-[10px] text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Submit
                            </button>
                            <Link className="text-light font-normal" to='/signup'>Signup?</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPass
