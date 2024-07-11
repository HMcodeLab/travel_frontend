"use client";

import { use, useState } from "react";
import "./EnquiryForm.css";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { validateEmail } from "@/helpers/validation";
import Thankyou from "../thankyou/thankyou";

const EnquiryForm = ({ setEnquiryModal }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    starting:"",
    destination: "",
    total_no_travelers: "",
    message: "",
    
  });

  let [error,setError]=useState({})

  let handelErrors=()=>{
    let {name,email,mobile,starting,destination,total_no_travelers}=user
    let valid=true
    let errorFields={}
    if(!name){
      valid=false
      errorFields.name='name is required'
    }
    if(!email){
      valid=false
      errorFields.email='email is required'
    }
    if (!validateEmail(email)) {
      valid = false;
      errorFields.email = "Enter valid email";
    }
    if(!mobile){
      valid=false
      errorFields.mobile='phone no. is required'
    }
    if (String(mobile).length !=10) {
      valid = false;
      errorFields.mobile = "phone no. should be of 10 digits"
    }

    if(!starting){
      valid=false
      errorFields.starting='field is required'
    }
    if(!destination){
      valid=false
      errorFields.destination='field is required'
    }
    if(!total_no_travelers){
      valid=false
      errorFields.total_no_travelers='field is required'
    }
    setError(errorFields)
    return valid
  }
  

  const handleChange = (e) => {

    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setError({...error,[name]:''})
  };

  const handleSendQuery = async () => {
    console.log(user)
    if(handelErrors()){
      let formData=new FormData()
      formData.append('name',user.name)
      formData.append('email',user.email)
      formData.append('mobile',user.mobile)
      formData.append('starting',user.starting)
      formData.append('destination',user.destination)
      formData.append('total_no_travelers',user.total_no_travelers)
      formData.append('message',user.message)
      formData.append('adminEamil',"sales@eligocs.com")
   
       try {
         const res = await axios.post(
           `${process.env.NEXT_PUBLIC_URL}/apis/query/savequery`,
           formData
         );
         console.log(res)
       
         if(res.status||null){
           toast.success(<Thankyou name={user.name}/>);
           setUser({
             name: "",
             email: "",
             mobile: "",
             starting:"",
             destination: "",
             total_no_travelers: "",
             message: "",
             
           })
           setTimeout(()=>{
            setEnquiryModal(false)
           },[1000])
         }
       } catch (error) {
         console.log(error);
         toast.success("error query not sent ");
       }
    }
   
  };

  return (
    <>
    <div className="enquiry_form_wrapper">
      <div className="min-h-[360px]mx-auto border-[1.5px] border-[#E0DEDE] rounded-lg font-[Merriweather-sans] absolute z-[50]  left-[30%] fadeInTop backdrop-blur-xl popup_model_form">
        <div className="enquiry_form_inner min-h-[352px] h-[100%] bg-white m-[3px] rounded-md flex flex-col gap-4 px-6 py-4">
          <div className="flex justify-center relative">
            <p className="font-[Merriweather-sans] text-[#02013D] text-[25px] pb-[30px] xsm:pb-[10px]">
              Send Your Enquiry
            </p>
            <div
              onClick={() => setEnquiryModal(false)}
              className="absolute bottom-20 right-0 bg-[#FADDDD] rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer close_enquiry_form"
            >
              <img
                src={"/Assets/Icons/cross.svg"}
                alt=""
                className="w-[12px h-[12px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 enquiry_inputs_outer">
            <div className="grid grid-cols-3 gap-4 gap-y-3 w-full enquiry_inputs_wrapper">
              <div className="flex flex-col gap-[2px]">
                <p className="text-[14px] text-[#000000] font-semibold">Name</p>
                <input
                  type="text"
                  className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-2 outline-none"
                  value={user?.name}
                  name="name"
                  onChange={handleChange}
                />
                {error.name && <span className="errors">{error.name}</span>}
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="text-[14px] text-[#000000] font-semibold">
                  Email id
                </p>
                <input
                  type="email"
                  className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-2 outline-none"
                  value={user?.email}
                  name="email"
                  onChange={handleChange}
                />
                {error.email && <span className="errors">{error.email}</span>}
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="text-[14px] text-[#000000] font-semibold">
                  Phone No.
                </p>
                <input
                  type="text"
                  className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-2 outline-none"
                  name="mobile"
                  value={user?.mobile}
                  onChange={handleChange}
                />
                {error.mobile && <span className="errors">{error.mobile}</span>}
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="text-[14px] text-[#000000] font-semibold">
                  Starting
                </p>
                <input
                  type="text"
                  className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-2 outline-none"
                  name="starting"
                  value={user.starting}
                  onChange={handleChange}
                />
                {error.starting && <span className="errors">{error.starting}</span>}
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="text-[14px] text-[#000000] font-semibold">
                  Destination
                </p>
                <input
                  type="text"
                  className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-2 outline-none"
                  name="destination"
                  value={user?.destination}
                  onChange={handleChange}
                />
                {error.destination && (
                  <span className="errors">{error.destination}</span>
                )}
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="text-[14px] text-[#000000] font-semibold">
                  No. Of Person
                </p>
                <input
                  type="number"
                  className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-2 outline-none"
                  name="total_no_travelers"
                  value={user?.total_no_travelers}
                  onChange={handleChange}
                />
                {error.total_no_travelers && (
                  <span className="errors">{error.total_no_travelers}</span>
                )}
              </div>
            </div>
            <div className="w-full flex flex-col gap-[2px]">
              <p className="text-[14px] text-[#000000] font-semibold">
                Message
              </p>
              <textarea
                type="text"
                className="border-[1.09px] border-[#B6B0B0] w-full rounded-sm p-2 outline-none"
                name="message"
                value={user.message}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button
              onClick={handleSendQuery}
              className="flex items-center gap-2 px-5 py-2 bg-[#CA1C26] text-white text-[13px] rounded xsm:px-4 " 
            >
              <img
                src={"/Assets/Icons/map.svg"}
                alt=""
                className="enquiry_icon"
              />
              <p className="text-[16px] xsm:text-[12px]">Book Now</p>
            </button>
          </div>
        </div>
      </div>
      </div>
      <Toaster />
    </>
  );
};

export default EnquiryForm;
