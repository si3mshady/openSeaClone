
import React from 'react'
import NFT from './NFT'
import './css/Feed.css'
import data from '../starter_data.js'

export default function Feed() {
   

    return (
        <div className='feed'>
            <div className='feed__container'>
         {data.map((element,index) => (
                    
                <NFT key={index} metadata={element.metadata}  img={element.image}  description={element.description}/>
                
            ) )}
               
               
            </div>
        </div>
    )
}
