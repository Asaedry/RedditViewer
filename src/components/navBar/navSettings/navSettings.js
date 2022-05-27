import React from "react";
import { useHistory } from "react-router-dom";



export const NavSettings = (props) => {

    const history = useHistory();

    const handleClick = (e) => {
        const location = history.location.pathname
        const target = e.target.value
        if(location.endsWith('/new') || location.endsWith('/top') || location.endsWith('/hot')){
            let resetLoc = location.slice(0, -4);
            props.nav(resetLoc + `/${target}`)
        } else if (location.endsWith('/')){
            props.nav(`/${target}`)
        } else {
            props.nav(location + `/${target}`)   
        }
    }

    return (
        <div>
            <input 
                className='button'
                type='button'
                value='new'
                onClick={handleClick}
            />
            <input 
                className='button'
                type='button'
                value='hot'
                onClick={handleClick}
            />
            <input 
                className='button'
                type='button'
                value='top'
                onClick={handleClick}
            />
        </div>
    )

}