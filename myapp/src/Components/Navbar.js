import '../ComponentsStyle/Navbar.css'
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import logo from '../files/img2.png'
import Axios from 'axios'
export default function Navbar(props){
    const [load,setLoad]=useState("");
    
        useEffect(()=>{
            Axios.get('https://catfact.ninja/fact').then((res)=>{
                setLoad(res.data.fact);
            });
        },[])
    async  function  fun(){
            setLoad("loading...");
            Axios.get('https://catfact.ninja/fact').then((res)=>{
                setLoad(res.data.fact);
            });
    }
   var width=window.width;
    return (
    <div>
            <img src={logo} width={1600} height={400}/>
       <div >
             <ul className='list'>
                <li><h1>StackOverfFlow</h1></li>
                <li className='ele'><h1>Home</h1></li>
                <li className='ele'><h1>sign in</h1></li>
             </ul>
        </div>
        <div className='inputdiv'>
            <input type='text' placeholder='search'/>
            <br/>
            <button onClick={fun}>search</button>
        </div>
        <h1 className='Answer'>{load}</h1>
    </div>
    )
}