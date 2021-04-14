import React from 'react'
import './css/HeaderOption.css'
export default function HeaderOption({linkName}) {
    return (
        
        <div className="headerOption">

        <a className='headerOption_link' href="#">{linkName}</a> 
        </div>
       
    )
}
