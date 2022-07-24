import React, {useState} from "react";
import '../style/Header.css'
import {Link, useNavigate} from 'react-router-dom'
import logo from './images/logo.png'
import home from './images/home.ico'
import Searchbar from "./Searchbar";
import searchIcon from './images/search-icon.png'

export default function Header(props){
    const [state, setState] = useState({title: ""})
    const navigate = useNavigate()

    function onSearchChange(event){
        const {value} = event.target
        setState({title: value})
        console.log(state.title)
    }

    function handleSubmit(event){
        if(state.title === ""){
            event.preventDefault();
        }else{
            event.preventDefault();
            props.handleSearch(state.title);
            navigate('/results')
        }
    }
        return (
            <nav className="Header">
                <div className="nav-controll">
                    <Link className="links" to='/home'>
                        <img src={logo} alt='' />
                    </Link>
                    {props.show && <div className="searchbar">
                        <Searchbar style={props.style} handleSubmit={handleSubmit} onSearchChange={onSearchChange} title={props.state} searchIcon={searchIcon}/>
                    </div>}
                </div>
            </nav>
        )
    }
    

