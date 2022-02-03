import './App.css';
import SubmitButton from './SubmitButtom.js';
import ActionForm from './Form.js';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br />
        <h2>Actionable Recourse</h2>
        <ActionForm />
        <br />
        <div id='button_result_table'></div>
        <br />
        <br /><br /><br /><Link to="/contact">Contact (testing routing)</Link>
      </header>
    </div>
  );
}

export default App;
