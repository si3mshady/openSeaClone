import React, {useState} from 'react'
import './css/SideBarHeader.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import SideBarIcons from './SideBarIcons'
export default function SideBarHeader({Icon,text,top, middle, bottom}) {

    const [open, setOpen] = useState(false);
    return (
        <div className="sideBarHeader">   

       
        {/* <Icon className="sideBarHeader__icon"/>
        <p className="sideBarHeader__text">{text}</p> */}
        <Accordion >
  <Card>
    <Card.Header>
      <Accordion.Toggle className="sideBarHeader" as={Button} variant="link" eventKey="0">
      <Icon className="sideBarHeader__icon"/>
        <p className="sideBarHeader__text">{text}</p>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      {top &&  
     
      <div className="sideBarHeader_buttonContainer">
      <button type="button" class="btn btn-outline-primary">Buy Now</button>
      <button type="button" class="btn btn-outline-info">On Auction</button>
      <button type="button" class="btn btn-outline-success">New</button>
      <button type="button" class="btn btn-outline-warning">Has Offers</button>

      </div>
      
      }

      {middle  &&  
     <div className="sideBarHeader_middleContainer">
     <SideBarIcons className="sideBarHeader_middleContainer_icon" />
     <SideBarIcons />
     <SideBarIcons />
     <SideBarIcons />
     {/* <div   className="sideBarHeader_buttonContainer">Username</div>
     <div   className="sideBarHeader_buttonContainer">Username</div>
     <div  className="sideBarHeader_buttonContainer">Username</div> */}

     </div>
     
     }
     


      
      </Card.Body>
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
