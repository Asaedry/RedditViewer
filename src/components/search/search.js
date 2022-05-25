import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "./searchSlice";


export const Search = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('')

    const handleSubmit =(e) =>{
        e.preventDefault();
        dispatch(setQuery(search));
        setSearch('');
    }

    return (
        <div id="searchBar">
            <form onSubmit={handleSubmit} id="search" name="search">
                <input 
                    id="search_bar" 
                    name="search" 
                    value={search}
                    onChange={(e) => setSearch(e.currentTarget.value)} 
                />
                <button type="submit" >
                    <i className="fa-solid fa-magnifying-glass"></i>    
                </button>
            </form>
        </div>
    )
}