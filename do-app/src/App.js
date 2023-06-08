import './App.css';
import React from 'react';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container } from 'react-bootstrap';
<link />
function App() {
  const [log, setLog] = useState('');
  const [newLog, newSetLog] = useState([]);
  const [name, setName] = useState('');
  const [newName, newSetName] = useState([]);
  const [info, setInfo] = useState('');
  const [newInfo, newSetInfo] = useState([]);

  function handleSubmit(e) {
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
 
  useEffect(() => {
    console.log(newName);
    console.log(newLog);
    console.log(newInfo);
  }, [newName, newLog, newInfo])

  const list = newName.forEach((value, index) => {
    return (newName[index])
  })
  
  console.log(newName);
  return (
    <div class="container">
      <div className="App" >
        <header className="App-header">
          <div div class="d-flex justify-content-center">To Do List</div>

        </header>


        <div class="col">
          <label class="d-flex justify-content-right" for="name">Enter Your Name:</label>
          <input class="form-control" type="text" id="names" placeholder="John Doe" onChange={e => setName(e.target.value)} ></input>
          <label class="d-flex justify-content-right" for="title" >Enter the Title:</label>
          <input class="form-control" ype="text" id="log" placeholder="Activity" onChange={e => setLog(e.target.value)}></input>
          <label for="description">Enter Information:</label>
          <textarea textarea class="form-control" rows="3" placeholder="What Id like to do is?" onChange={e => setInfo(e.target.value)} ></textarea>
        </div>
        <div class="selection">
          
            <Button  onClick={handleSubmit} class="btn btn-secondary btn-lg">add</Button>
            <Button   class="btn btn-secondary btn-lg" align="right">delete</Button>

          
          <div class="form-check">
          {newName.map((value, index) => {
            return (
              <div class="form-check">
                {value + " " + newLog[index] + " " + newInfo[index]}
              </div>
            )
          })}
          </div>

        </div>
      </div>
    </div>







  );



}
export default App;
