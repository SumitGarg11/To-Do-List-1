import React, { useState } from "react";
import ReactDOM from "react-dom";
import { LOGO_URL } from "./utils/mockdata";




const App = () => {
  
    const [inputData, setInputData ]  = useState();
    const [items, setItems] = useState([]);
    const additem = () => {

        if(!inputData){

        }
        else {
        setItems([...items,inputData]);
        setInputData('');
        }
    }
    const deleteItem = (id) =>{
        const updateditems = items.filter((elem,index)=>{
            return index != id;
        });
        setItems(updateditems);
    }
    return (
        <div className="container">
            <div className="todo-app">
               <h2>To-Do List <img  src={LOGO_URL}  /> </h2>
               <div className="row">
                    <input type="text" id="input-box" placeholder="✍️ Add your text"  value = {inputData}  onChange={(e)=>setInputData (e.target.value)} />
                    <button  className="btn-add" onClick={additem} >Add </button>
                </div>

        <div className="showItems">
        {
            items.map((elem,index)=>{
                return (
                <div className="eachItem" key ={index}>
                    <h3 className="task">{elem}</h3>
                    <button className="delete"  onClick={ ()=>deleteItem(index)} >Delete</button>
                </div>
                )
            })
        }
       
       </div>
            </div>

        
        
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);