import { faEnvelope, faLocationDot, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Contact = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-3">
                <div>
                    <div className="mb-7 text-center">
                        <h2 className="mb-5 text-[32px] font-bold">Get in Touch</h2>
                        <p className="text-base text-light font-normal max-w-[600px] mx-auto">Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.</p>
                    </div>
                </div>

                <div className="flex">
                    <div className="px-3 mb-6 flex-1">
                        <div className="p-6 text-center border-[1px] border-light rounded-md overflow-hidden">
                            <div className="text-primary text-3xl"><FontAwesomeIcon icon={faPhone} /></div>
                            <div className="font-normal">
                                <h4 className="text-lg font-bold">Contact</h4>
                                <p>(+91)-9876XXXXX</p>
                                <p>(+91)-987654XXXX</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 mb-6 flex-1">
                        <div className="p-6 text-center border-[1px] border-light rounded-md overflow-hidden">
                            <div className="text-primary text-3xl"><FontAwesomeIcon icon={faEnvelope} /></div>
                            <div className="font-normal">
                                <h4 className="text-lg font-bold">Mail & Website</h4>
                                <p>mail.example@gmail.com</p>
                                <p> www.yourdomain.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 mb-6 flex-1">
                        <div className="p-6 text-center border-[1px] border-light rounded-md overflow-hidden">
                            <div className="text-primary text-3xl"><FontAwesomeIcon icon={faLocationDot} /></div>
                            <div className="font-normal">
                                <h4 className="text-lg font-bold">Address</h4>
                                <p> 140 Ruami Moraes Filho, 987 - Salvador - MA, 40352, Brazil.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap pt-24">
                    <div className="flex-1 px-3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224460.27699589735!2d-85.04252389693504!3d32.49207147545643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888ccd1b583531f5%3A0x728c50a9eee10361!2sColumbus%2C%20GA%2C%20USA!5e0!3m2!1sen!2sin!4v1710181233154!5m2!1sen!2sin"
                            className="border-0 w-full h-full rounded-md"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="flex-1 px-3">
                        <form className="font-normal text-base">
                            <div className="mb-6">
                                <input type="text" className="outline-0 w-full py-2 px-3 border-[1px] border-light rounded-md block" placeholder="Full Name" />
                            </div>
                            <div className="mb-6">
                                <input type="email" className="outline-0 w-full py-2 px-3 border-[1px] border-light rounded-md block" placeholder="Email" />
                            </div>
                            <div className="mb-6">
                                <input type="tel" className="outline-0 w-full py-2 px-3 border-[1px] border-light rounded-md block" placeholder="Phone" />
                            </div>
                            <div className="mb-6">
                                <textarea name="message" className="outline-0 w-full py-2 px-3 border-[1px] border-light rounded-md block" placeholder="Message" rows="4"></textarea>
                            </div>
                            <button type="button" className="inline-flex items-center rounded-md bg-primary px-5 py-[10px] text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
