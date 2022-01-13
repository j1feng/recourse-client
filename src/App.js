import './App.css';
import ExampleButton from './ExampleButton.js';
import MyForm from './Form.js';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br />
        <img alt = ' ' src="https://datascience.ucsd.edu/wp-content/uploads/2020/05/berk-ustun-scaled.jpg" width="10%"/ >
        <p>Actionable Recourse</p>
        <ExampleButton />
        <br />
        <MyForm />
        <br /><br /><br /><Link to="/contact">Contact</Link>
      </header>
    </div>
  );
}

export default App;
