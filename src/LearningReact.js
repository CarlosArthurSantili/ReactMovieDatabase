import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './LearningReact.css';

const PersonMethod = (name = "Genérico", lastName = 'Padrão', age = '25') => {
  return (
    <div className="Person">
      {
        name ? (
          <>
            <h1>Name: {name}</h1>
            <h2>Last Name: {lastName}</h2>
            <h3>Age: {age}</h3>
          </>
        ) : (
          <>
            <h1>Name: ...</h1>
            <h2>Last Name: ...</h2>
            <h3>Age: ...</h3>
          </>
        )
      }
    </div>
    
  )
}

const PersonComponent = (props) => {
  return (
    <div className="Person">
      {
        props.name ? (
          <>
            <h1>Name: {props.name}</h1>
            <h2>Last Name: {props.lastName}</h2>
            <h3>Age: {props.age}</h3>
          </>
        ) : (
          <>
            <h1>Name: ...</h1>
            <h2>Last Name: ...</h2>
            <h3>Age: ...</h3>
          </>
        )
      }
    </div>
    
  )
}

const App = () => {
  const name = null;
  const isNameShowing = false;
  const [counter, setCounter] = useState(100); //0 é o número inicial de "State"

/*  useEffect(() => {
    setCounter(100);
  }, []);
*/
  useEffect(() => {
    alert("Changed the counter to " + counter + " succesfully!");
  }, [counter]);

  return (
    <div className="App">
      <h1>Hello, React!</h1>
      {PersonMethod("carlos", "santili")}
      <PersonComponent name={'arthur'} lastName={'santili'} age={25}></PersonComponent>
      <PersonComponent name="santili" lastName='santili' age="25"></PersonComponent>
      <div className="Counter">
        <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
