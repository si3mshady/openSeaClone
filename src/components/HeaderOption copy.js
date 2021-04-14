import React from 'react'
import './css/HeaderOption.css'
export default function HeaderOption({linkName, Avatar}) {
    return (
        
        <div className="headerOption">
        {linkName ? 
            <a className='headerOption_link' href="#">{linkName}</a> :
            <Avatar/>
        
        }
       
        </div>
       
    )
}
