import './App.css';
import ExampleButton from './ExampleButton.js';
import MyForm from './Form.js';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br />
        <h2>Actionable Recourse</h2>
        <ExampleButton />
        <br />
        <MyForm />
        <br />
        <p>Need to work on the design </p>
        <br /><br /><br /><Link to="/contact">Contact (testing routing)</Link>
      </header>
    </div>
  );
}

export default App;
