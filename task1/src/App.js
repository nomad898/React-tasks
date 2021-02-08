import logo from './logo.svg';
import './App.css';
import HelloWorldComponent from './components/HelloWorldComponent';
import HelloWorldPureComponent from './components/HelloWorldPureComponent';
import HelloWorldFunctional from './components/HelloWorldFunctional';
import HelloWorldLambdaFunctional from './components/HelloWorldLambdaFunctional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <div>
        <HelloWorldLambdaFunctional someText="This is Lambda function"/> 
        <HelloWorldFunctional someText="This is function"/>
        <HelloWorldComponent someText="This is Component"/>
        <HelloWorldPureComponent someText="This is Pure Component"/> 
      </div>
    </div>
  );
}

export default App;
