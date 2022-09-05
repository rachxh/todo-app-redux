import { createSlice } from "@reduxjs/toolkit";

const toDoSlider = createSlice({
    name: 'toDO',
    initialState :{
        todoList:[
            {id:1, content: 'raeding'},
            {id:2,contnet:'clean the room'}
        ]

    },
    reducers:{
        addToDo: (state,action)=>{
            let newTodoList ={
                id: Math.random(),
                content:action.payload.newContent
            }
            state.todoList.push(newTodoList);
        },
       deleteToDo: (state,action)=>{
        let {todoList}=state;
        state.todoList = todoList.filter((item)=>item.id!==action.payload.id);
       },
       editToDo: (state,action)=>{
        let {todoList}=state;
        state.todoList = todoList.map((item)=>item.id === action.payload.id ? action.payload : item)
       }
    },
})

//Action creator are generated for each case reducer fucntion 

export const {addToDo,deleteToDo,editToDo} = toDoSlider.actions

export default toDoSlider.reducer