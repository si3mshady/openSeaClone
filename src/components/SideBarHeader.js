import React, {useState} from 'react'
import './css/SideBarHeader.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import SideBarIcons from './SideBarIcons'
export default function SideBarHeader({Icon,text,top, middle, bottom}) {

    // const [open, setOpen] = useState(false);
    return (
        <div className="sideBarHeader">   
   
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

     <SideBarIcons  url="https://image.shutterstock.com/image-vector/gif-animation-button-icon-260nw-445831636.jpg" screenName="gifMaster" />
     <SideBarIcons url="https://seek-team-prod.s3.fr-par.scw.cloud/users/5f5f106c08cba624427673.jpg" screenName="NiftyNFT" />
     <SideBarIcons url="https://assets.coingecko.com/coins/images/2214/large/token.png?1547036499g" screenName="tokenTod" />
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
