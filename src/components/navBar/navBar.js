import React, { useEffect } from "react";
import { Search } from "./search/search";
import { NavSettings } from "./navSettings/navSettings";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setQuery } from "./search/searchSlice";
import { useLocation } from "react-router-dom";

export const NavBar = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        if(location.hash === ''){
            history.replace('/RedditViewer/#/')
        }
    }, [])

    useEffect(() => {
        dispatch(setQuery(location.hash.slice(1)));
    }, [dispatch, location])

    const handleNav = (nav) => {
        history.push('');
        history.replace('/RedditViewer/#' + nav);
    }


    return(
        <div id='navBar'>
            <Search nav={handleNav} />
            <NavSettings nav={handleNav} />
        </div>
    )

}
