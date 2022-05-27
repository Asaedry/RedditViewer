import React, { useState } from "react";


export const Search = (props) => {

    const [search, setSearch] = useState('')

    const handleSubmit =(e) =>{
        e.preventDefault();
        props.nav('/' + search.toLowerCase());
        setSearch('');
    }

    return (
        <div id="searchBar">
            <form onSubmit={handleSubmit} id="search" name="search">
                <input 
                    className="search_bar" 
                    name="search" 
                    value={search}
                    onChange={(e) => setSearch(e.currentTarget.value)}
                />
                <button type="submit"  className='button' >
                    <i className="fa-solid fa-magnifying-glass"></i>    
                </button>
            </form>
        </div>
    )
}