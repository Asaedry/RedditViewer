import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setQuery } from "./searchSlice";


export const Search = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('')

    const handleSubmit =(e) =>{
        e.preventDefault();
        // let term = e.value
        // console.log(term);
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
                <input type="submit" value="S"/>
            </form>
        </div>
    )
}