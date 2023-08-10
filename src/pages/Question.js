import React from 'react'
import Modal from 'react-modal'
import { useState } from 'react';
import {useSelector} from 'react-redux'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'

const Question = () => {
  const [answerType,setAnswerType] = useState('');
  const [choices,setChoices] = useState('');
  const [question, setQuestion] = useState('');
  let {isOpen,id} = useSelector(state=>state.forms.modalOpen);
  const navigate = useNavigate();

  // const dispatch = useDispatch();
  const handleAdd = async ()=>{
    try {
        const response = await axios.post(`http://localhost:8000/api/questions/${id}/question`,{
          question : question,
          answerType : answerType,
          choices : choices
        })

        console.log(response)
        toast.success("Question Added !")

    } catch (error) {
      console.error(error.message)
    }
  }

  const handleClose = ()=>{
    isOpen = false;
    navigate('/')
  
  }


  return (
    <Modal isOpen={isOpen} style={{width : '500px'}} appElement={document.getElementById('root')} >
      <div className='flex flex-col gap-10 items-center justify-center w-6/12 mx-auto'>

        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          className='border border-gray-500 py-2 px-3 w-full rounded-md'
        />
        
        <select
            id="answerType"
            value={answerType}
            onChange={e => setAnswerType(e.target.value)}
            className='bg-gray-500 text-white py-2 px-2 rounded-md' required
          >
            <option value="" className='bg-white text-black'>Select an answer type</option>
            <option value="Text" className='bg-white text-black'>Text</option>
            <option value="Multichoice" className='bg-white text-black'>Multichoice</option>
            <option value="SingleSelect" className='bg-white text-black'>Single Select</option>
          </select>

          {answerType === 'Multichoice' || answerType === 'SingleSelect' ? (
          <div>
            <textarea
              placeholder="Enter choices (one per line)"
              value={choices}
              className='border border-gray-500 w-[30rem] py-2 px-3'
              onChange={e => setChoices(e.target.value)}
            ></textarea>
          </div>
        ) : null}

        <div className='flex items-center gap-10 '>
          <button onClick={handleAdd} className='bg-green-600 text-white py-2 px-7 rounded-md hover:bg-green-700 transition-all duration-300'>Add</button>
          <button className='bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-500 transition-all duration-300' onClick={handleClose}>Close</button>
        </div>

      </div>
    </Modal>
  )
}

export default Question