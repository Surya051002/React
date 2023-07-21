import '../ComponentsStyle/Navbar.css'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
export default function Navbar(){

    return (
        <div className="name">
            <ul>
               <li><a href="#home">Home</a></li>
               <li><a href="#news">News</a></li>
               <li><a href="#contact">Contact</a></li>
               <li><a href="#about">About</a></li>
               <li><input type='text' /></li>
               <li><a style={{color:'red'}}>{FaSearch}</a></li>
            </ul>
            
       
        </div>
    )
}