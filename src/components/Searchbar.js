import React from 'react';

export default function Searchbar(props) {
    return (
            <form style={props.style} onSubmit={props.handleSubmit} action='/results'>
                <input 
                    placeholder="Search"
                    onChange={props.onSearchChange}
                    value={props.title}
                    />
                <button>
                    <img src={props.searchIcon} className='search-icon' alt="" />
                </button>
            </form>
      );
}

 