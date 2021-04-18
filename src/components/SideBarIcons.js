import React from 'react'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';

import './css/SideBarIcons.css'
export default function SideBarIcons({screenName, url}) {
    return (
        <div className="sideBarIcons">
                     <Avatar src={url} />     <p>{screenName}</p>
        </div>
    )
}
