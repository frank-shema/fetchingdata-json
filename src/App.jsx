import React from 'react'
import { useState ,useEffect } from 'react'
import Form from './Form';
import './App.css'
import Table from './Table';

function App() {
    const API_URL="https://jsonplaceholder.typicode.com/";
    const [reqType,setReqType] =useState("users");
    const [items , setItems]=useState([]);

   useEffect(()=>{
    async function fetchItems(){
        try{
            const response=await fetch(`${API_URL}${reqType}`);
            const data=await response.json();
            setItems(data);
        }
        catch(err){
            console.log(err);
        }
    }
    fetchItems();
   },[reqType])
  return (
    <div>
      <Form reqType={reqType} setReqType={setReqType}/>
      <Table items={items}/>
    </div>
  )
}

export default App
