import React from 'react'
import javier from  '../images/javi.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './css/NFT.css'

export default function NFT() {
    return (
        <div className="nft card mb-5">
        <img src={javier}/>
        </div>
         )
}
