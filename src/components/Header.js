import React from 'react'
import './css/Header.css'
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption'


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
                <div>
                <SearchIcon className="header__input__icon"/>
            </div>           
                <input  placeholder="Search items, collections and NFT's" type='text' />
            </div>

            <HeaderOption linkName="Browse" />
            <HeaderOption linkName="Activity" />
            <HeaderOption linkName="Rankings" />
            <HeaderOption linkName="Blog" />
            <HeaderOption linkName="Community" />
            <HeaderOption linkName="Create" />
            <HeaderOption avatar linkName="Create" />
          
        
            
        </div>
    )
}
