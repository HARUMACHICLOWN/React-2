import logo from './logo.svg';
import './App.css';
import { getByText, render } from '@testing-library/react';
import React,{useState} from 'react';  

function App() {
    // const [name, setName] = useState('Samir')
    // const [surname, setSurname] = useState('Nasibulin')
    // const [age, setAge] = useState(16)
    // const [ban, setBan] = useState(false); 
    // function clickHandler() {
    //   setName ('Асгер'); 
    //   setSurname ('OFF')
    // }
    // const [value, setValue] = useState('');


    // return <div>
    //   <h2>{name}</h2>
    //   <h2>{surname}</h2>
    //   <h2>{age}</h2>
    //   <button onClick={clickHandler}>Смена Имени И Фамилии</button>
    //   <br /><span>{ban ? 'в бане' :  'не забенен' }</span>
    //   <br /><button onClick={() => setBan(! ban)}>ban</button>
    //   <br /><button onClick={() => setAge(age + 1 )}>+ К возрасту</button>
    //   <br /><button onClick={() => setAge(age - 1 )}>- К возрасту</button>
    // </div>;


    const[SimvolsNum, setSimvolsNum] = useState(0); 
    <input onChange={event => setSimvolsNum(event.target.value.length)} />




}








export default App;
