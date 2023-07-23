import logo from '../files/img.png'
import Navbar from './Navbar';
import { useState } from 'react';
export default function Main(){
    const [color,setColor]=useState("");
  const [col,setCol]=useState("black");
  return (
    <div>
    <div style={{backgroundColor:color}} className='box'>
    <h1 style={{color:col}}>{color}</h1>
    </div>
    <Navbar setColor={setColor} setCol={setCol} col={col} />
    
    </div>
  );
}