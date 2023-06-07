import './App.css';
import React from 'react';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
    const [log, setLog] = useState('');
    const [newLog, newSetLog] = useState([]);
    const [name, setName] = useState('');
    const [newName, newSetName] = useState([]);
    const [info, setInfo] = useState('');
    const [newInfo, newSetInfo] = useState([]);
    
function handleSubmit(e){
  e.preventDefault()

  newSetLog([
    ...newLog,
    log
    
  ])

  newSetName([
    ...newName,
    name
  ])

  newSetInfo([
    ...newInfo,
    info
  ])

}

useEffect(()=>{
console.log(newName);
console.log(newLog);
console.log(newInfo);
},[newName,newLog,newInfo])

const list = newName.forEach((value,index) =>{
  return(newName[index])
})
  console.log(newName);
  return (
    
    <div className="App">
      <header className="App-header">
        <div class="title">To Do List</div>

      </header>

      <div class="information">
        
        <label for="name">Enter Your Name:</label>
        <input type="text" id="names"  placeholder="John Doe" onChange={e => setName(e.target.value)} ></input>
        <label for="title" >Enter the Title:</label>
        <input type="text" id="log" placeholder="Activity" onChange={e => setLog(e.target.value)}></input>
        <label for="description">Enter Information</label>
        <textarea id="info" placeholder="What Id like to do is?" rows='10' cols="30" onChange={e => setInfo(e.target.value)} ></textarea>
        <div class="selection">
          <button onClick={handleSubmit}>add</button>
          
           
        </div>
        
        {newName.map((value,index)=>{
          return(
            <div>
              {value+" "+ newLog[index]}
            </div>
          )
        })}

        <div>red</div>
       
      </div>
    </div>




  
    
    
    );


       
}
export default App;
