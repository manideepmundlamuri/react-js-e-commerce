import logo from './logo.svg';
import './App.css';
import Site from './Site';
import ProductSelector from './Selector';
import ProductComponent from './Display';
import Display from './Display';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Site></Site>
      {/* <Display></Display> */}
      {/* <ProductComponent></ProductComponent> */}
      {/* <ProductSelector></ProductSelector> */}
    </div>
  );
}

export default App;
