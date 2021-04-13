import React from 'react'
import './css/Header.css'
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import SearchIcon from '@material-ui/icons/Search';


export default function Header() {
    return (
        <div className="header">
            <div className="header__logo">
            <DirectionsBoatIcon/>
            </div>

             <div className="header__text">
                    <p>si3mShadyNFT</p>
            </div>
            <div className="header__input">
            <SearchIcon className="header__input__icon"/>
                <input  placeholder="Search items, collections and NFT's" type='text' />
            </div>


          
        
            
        </div>
    )
}
