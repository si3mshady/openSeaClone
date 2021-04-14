import React from 'react'
import './css/Sidebar.css'
import SideBarHeader from './SideBarHeader'
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import StarIcon from '@material-ui/icons/Star';
export default function SideBar() {
    return (
        <div className="sidebar">        
        
       <div className="sidebar_header">
            <SideBarHeader Icon={StarIcon} top text="Status" />
       </div>

       <div className="sidebar_header">
            <SideBarHeader Icon={ViewComfyIcon}  middle text="Collections" />
       </div>

       <div className="sidebar_header">
            <SideBarHeader Icon={LoyaltyIcon} text="On Sale" />
       </div>

       
      
            
        </div>
    )
}
