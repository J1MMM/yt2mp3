import React, {useState} from "react";
import '../style/Search.css'
import searchIcon from './images/search-icon.png'
import { useNavigate } from "react-router";
import Searchbar from "./Searchbar";

export default function Search(props){
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
            <section className="Search">
               <h1>YouTube To MP3 Converter</h1>
               <p>Find, watch and download YouTube videos</p>
                <Searchbar handleSubmit={handleSubmit} onSearchChange={onSearchChange} title={props.state} searchIcon={searchIcon}/>
            </section>
        )    
}
