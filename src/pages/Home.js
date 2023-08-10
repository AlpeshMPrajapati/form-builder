import React,{ useEffect,useState } from 'react'
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom'
import {AiOutlineDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'

const Home = () => {
    const [forms,SetForms] = useState([]);
    const navigate = useNavigate()

    const getForms = async()=>{
        try {
            const response = await axios.get('http://localhost:8000/api/forms')
            console.log(response)
            SetForms(response.data.forms)
            
        } catch (error) {
            console.error("Error in fetching Forms : ",error.message)
        }
    }


    useEffect(() => {
      getForms();
    }, [])


    const handleDelete = async(id)=>{
        try {
           const DeletedForm = await axios.delete(`http://localhost:8000/api/forms/${id}`) ;
           console.log(DeletedForm);
           getForms();
        } catch (error) {
            console.log(error.message)
        }
    }




  return (
    <div className='mt-7 flex flex-col items-start justify-center max-w-[1280px] mx-auto'>
        <button className='bg-green-600 text-white py-2 px-5 mx-auto rounded-md' onClick={()=> navigate('/form')}>Create Form</button>

        <div className='w-full flex flex-col gap-4 mt-10 mx-7'>
            <h2 className='font-bold text-2xl text-gray-600 '>Forms</h2>
            {
              forms.length > 0 ?
               (
               <div className='w-full flex itmes-center gap-10 flex-wrap'>
                    {forms.map((form)=>{
                    return<div className='max-w-[400px] h-[250px] flex flex-col items-center gap-5 shadow-lg p-3 rounded-md' key={form._id}>
                        <h1 className='text-xl font-semibold text-slate-800'>{form.formName}</h1>
                        <p>createdAt : <span>{form.createdAt.toString().split('GMT')[0]}</span></p>
                       <p>URL : <Link to={`http://www.localhost:8000/api/forms/${form._id}`} target='_blank'>{`forms/${form._id}`}</Link></p>
                        <div className='flex items-center gap-5'>
                            <AiOutlineDelete size={24} className='hover:text-red-700 hover:cursor-pointer transition duration-200' onClick={()=>handleDelete(form._id)}/>
                            <FiEdit size={22} className='hover:text-green-600 hover:cursor-pointer transition duration-200'/>
                        </div>

                    </div>
                })}
               </div>
               ) :
               (<div>No Form Found</div>)  
            }
        </div>
    </div>
  )
}

export default Home