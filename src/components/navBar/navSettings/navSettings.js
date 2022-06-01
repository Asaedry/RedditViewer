import React from "react";
import { useLocation } from "react-router-dom";



export const NavSettings = (props) => {

    const location = useLocation();

    const handleClick = (e) => {
        const fixedLocation = location.hash.slice(1);
        const target = e.target.value
        if(fixedLocation.endsWith('/new') || fixedLocation.endsWith('/top') || fixedLocation.endsWith('/hot')){
            let resetLoc = fixedLocation.slice(0, -4);
            props.nav(resetLoc + `/${target}`)
        } else if (fixedLocation.endsWith('/')){
            props.nav(`/${target}`)
        } else {
            props.nav(fixedLocation + `/${target}`)   
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