import React from 'react'
import './css/HeaderOption.css'
export default function HeaderOption({linkName, Avatar}) {
    return (
        
        <div className="headerOption">
        {linkName ? 
            <a className='headerOption__link' href="#">{linkName}</a> :
            <Avatar className='headerOption__avatar'/>
        
        }
       
        </div>
       
    )
}
