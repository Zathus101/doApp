import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="title">To Do List</div>
        
      </header>

      <div class="information">
        
        <label for="name">Enter Your Name:</label>
        <input type ="text" id="name" placeholder="John Doe" ></input>
        <label for="title" >Enter the Title:</label>
        <input type ="text" id="title" placeholder="Activity"></input>
        <label for ="description">Enter Information</label>
        <textarea id ="description" placeholder="What Id like to do is?" rows='10' cols="30"></textarea>
        
      </div>

    </div>
  );
}

export default App;
