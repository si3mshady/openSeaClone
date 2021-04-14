import React, {useState} from 'react'
import './css/SideBarHeader.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'

export default function SideBarHeader({Icon,text}) {

    const [open, setOpen] = useState(false);
    return (
        <div className="sideBarHeader">   

       
        {/* <Icon className="sideBarHeader__icon"/>
        <p className="sideBarHeader__text">{text}</p> */}
        <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle className="sideBarHeader" as={Button} variant="link" eventKey="0">
      <Icon className="sideBarHeader__icon"/>
        <p className="sideBarHeader__text">{text}</p>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    {/* <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header> */}
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>



        {/* <p className="sideBarHeader__text">{text}</p> */}
        
            
        </div>
    )
}
