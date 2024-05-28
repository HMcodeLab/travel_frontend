import './EnquiryForm.css'

const EnquiryForm = ({setEnquiryModal}) => {
    return (
        <div className="w-[560px] min-h-[350px]mx-auto border-[1.5px] border-[#E0DEDE] rounded-lg font-[Merriweather-sans] absolute z-[50] top-48 left-[30%] fadeInTop backdrop-blur-xl">
                <div className="w-[552px] min-h-[342px] bg-white m-[3px] rounded-md flex flex-col gap-4 px-6 py-4">
                    <div className="flex justify-center relative">
                        <p className="font-[Merriweather-sans] text-[#02013D] text-[18px]">Send Your Enquiry</p>
                        <div onClick={() => setEnquiryModal(false)} className="absolute bottom-0 right-0 bg-[#FADDDD] rounded-full w-[25px] h-[25px] flex justify-center items-center cursor-pointer">
                            <img src={"/Assets/Icons/cross.svg"} alt="" className="w-[12px h-[12px]" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-3 gap-4 gap-y-2 w-full">
                            <div className="flex flex-col gap-[2px]">
                                <p className="text-[11px] text-[#000000] font-semibold">Name</p>
                                <input type="text" className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-1 outline-none" />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <p className="text-[11px] text-[#000000] font-semibold">Email id</p>
                                <input type="email" className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-1 outline-none" />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <p className="text-[11px] text-[#000000] font-semibold">Phone No.</p>
                                <input type="text" className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-1 outline-none" />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <p className="text-[11px] text-[#000000] font-semibold">Starting</p>
                                <input type="text" className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-1 outline-none" />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <p className="text-[11px] text-[#000000] font-semibold">Destination</p>
                                <input type="text" className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-1 outline-none" />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <p className="text-[11px] text-[#000000] font-semibold">No. Of Person</p>
                                <input type="number" className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-1 outline-none" />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-[2px]">
                            <p className="text-[11px] text-[#000000] font-semibold">Message</p>
                            <textarea type="text" className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-1 outline-none" />
                        </div>
                    </div>
                    <div>
                        <button className="flex items-center gap-2 px-5 py-2 bg-[#CA1C26] text-white text-[13px] rounded">
                            <img src={"/Assets/Icons/map.svg"} alt="" className="w-[23px] h-[21px]"/>
                            <p>Book Now</p>
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default EnquiryForm