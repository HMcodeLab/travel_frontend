import React, { useState } from 'react'
import styles from './page.module.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { validateEmail } from '@/helpers/validation'
import Thankyou from '../thankyou/thankyou'

const ContactForm = () => {
    
    let [user,setUser]=useState({
        name:'',
        email:'',
        mobile:'',
        total_no_travelers:'',
    })
    let [errors,setError]=useState({})

    const getUserData=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        setError({...errors,[e.target.name]:''})
    }

    const errorHandler=()=>{
        let {name,email,mobile,total_no_travelers}=user
        let valid=true
        let errorFields = {}

        console.log(validateEmail(email))
        

        if(!name){
            valid=false
            errorFields.name='name is required'
        }
        if(!email){
            valid=false
            errorFields.email='email is required'
        }
        if (!validateEmail(email)) {
            valid = false
            errorFields.email="Enter a valid email"
        }
        if(!mobile){
            valid=false
            errorFields.mobile='phone number is required'
        }
        if (String(mobile).length != 10) {
            valid = false
            errorFields.mobile='phone number should be of 10 digits'
        }
        if(!total_no_travelers){
            valid=false
            errorFields.total_no_travelers='number of the guest is required'
        }
        setError(errorFields)
        return valid
    }


    
    const handelFormSubmit=async(e)=>{
        e.preventDefault()

       if(errorHandler()){

        let formData=new FormData()
        formData.append('name',user.name)
        formData.append('email',user.email)
        formData.append('mobile',user.mobile)
        formData.append('total_no_travelers',user.total_no_travelers)
        formData.append('adminEamil',"sales@eligocs.com")
        
        try {
            const res = await axios.post(
              `${process.env.NEXT_PUBLIC_URL}/apis/query/savequery`,
              formData
            );
         
          
            if(res.status||null){
                
              setUser({
                name: "",
                email: "",
                mobile: "",
                destination: "",
                total_no_travelers: "",
                message: "",
                
              })
            }
            toast.success(<Thankyou name={user.name}/>)
          } catch (error) {
            console.log(error);
            toast.error(res?.msg ||null);
          }
       }
    }

    return (
        <>
            <Toaster/>
        <div className={styles.contact_main}>
            <div className={styles.contact_inner}>
                <h2>Get Free Quotes</h2>
                <div className={styles.contact}>
                    <form   className={styles.form}>
                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text" name='name' value={user.name} onChange={getUserData}/>
                           {errors.name&& <span>{errors.name}</span>}
                        </div>
                        <div>
                            <label htmlFor="">Email id</label>
                            <input type="text" name='email' value={user.email} onChange={getUserData}/>
                            {errors.email&& <span>{errors.email}</span>}
                        </div>
                        <div>
                            <label htmlFor="">Number</label>
                            <input type="text"name='mobile'  value={user.mobile} onChange={getUserData}/>
                            {errors.mobile&& <span>{errors.mobile}</span>}
                        </div>
                        <div>
                            <label htmlFor="">Number of Guest</label>
                            <input type="text" name='total_no_travelers' value={user.total_no_travelers} onChange={getUserData}/>
                            {errors.total_no_travelers&& <span>{errors.total_no_travelers}</span>}
                        </div>
                        <button onClick={handelFormSubmit}>SUBMIT</button>
                        <ul>
                            <li>We assure the privacy of your contact data.</li>
                            <li>This data will only be used by our team to contact you and no other purposes.</li>
                        </ul>
                    </form>
                </div>
            </div>
            </div>
        </>
    )
}

export default ContactForm