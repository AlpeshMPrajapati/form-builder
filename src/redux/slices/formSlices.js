// reducers/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'forms',
  initialState:{
    modalOpen : {
      isOpen : false,
      id :''
    },

  },
  reducers: {
    modalIsOpen : (state,action)=>{
      state.modalOpen.isOpen = true;
      state.modalOpen.id = action.payload;
    },
    modalIsClose : (state)=>{
      state.modalOpen = false;
    }
    
  },
});

export const { modalIsClose,modalIsOpen } = formSlice.actions;

export default formSlice.reducer;
