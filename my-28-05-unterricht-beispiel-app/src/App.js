import logo from "./logo.svg";
import "./App.css";
import Calculator from "./Calculator";
import PasswordValidator from "./components/PasswordValidator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PasswordValidator />
        <Calculator />
      </header>
    </div>
  );
}

export default App;
