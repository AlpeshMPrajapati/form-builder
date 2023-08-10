import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { modalIsOpen } from '../redux/slices/formSlices';
import axios from 'axios'
import toast from 'react-hot-toast'

const Form = () => {
    const [formName,setFormName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick =async ()=>{
      try{
              const response = await axios.post(`http://localhost:8000/api/forms`,{
              formName : formName,
            })
            console.log(response)
            const id = response.data.data._id;
            toast.success("Form is Created !")
        dispatch(modalIsOpen(id));
        navigate('/question')
      }
      catch(error){
        console.error(error.message)
      }
    }


  return (
    <div className='flex flex-col mt-10 items-center justify-center gap-6'>
        <div>
            <input type="text" name='formName' className='border border-gray-500 px-4 py-1 rounded-md outline-none' value={formName} onChange={e=>setFormName(e.target.value)} placeholder='Enter Form Name' required />
        </div>
        <button className='bg-green-600 text-white py-2 px-5 mx-auto rounded-md' onClick={handleClick}>Add Question</button>
        
    </div>
  )
}

export default Form