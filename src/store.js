import { configureStore } from '@reduxjs/toolkit'
import toDoSlider from "./Reducer/todoSlider"



export default configureStore({
  reducer: { 
    //allows you create n number od sliders
   toDo: toDoSlider
  }
})