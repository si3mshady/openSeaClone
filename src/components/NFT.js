import React from 'react'
import javier from  '../images/jav1.jpg'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Button from 'react-bootstrap/Button'
import './css/NFT.css'

export default function NFT({img, description}) {
    return (
        <div className="nft card">
        {/* <img src={img}/> */}

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text>
                {description}
                </Card.Text>
                <Button variant="primary">MINT</Button>
            </Card.Body>
            </Card>
            
  



        </div>
         )
}
