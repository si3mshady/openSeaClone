import React, {useState, useEffect} from 'react'
import compiled_contract from './contract_abi.json'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './css/NFT.css'
import Web3 from 'web3';


export default function NFT({img, metadata, description}) {
    const [account, setAccount] = useState('')
    const [abi, setAbi] = useState('')
    const [web3Instance, setWeb3Instance] = useState()
  
  
    useEffect(() => {
      const initializeWeb3 = async () => {
        try {
          // Will open the MetaMask UI       
         const accounts =  await window.ethereum.request({ method: 'eth_requestAccounts' });       
         let web3 = new  Web3(window.ethereum);  
         window.ethereum.enable()  
         setAccount(accounts[0])  
         setWeb3Instance(web3)  
         console.log(web3Instance)  
  
        } catch (error) {
          console.error(error);
        }
      };
      initializeWeb3()
      setAbi(compiled_contract.abi)
    
      return true;
    },[])  

  
  const mintToken = () => {  
    
    console.log('Clicked Mint Token')
  
  let contract_address = "0x09aa12e09c6c31113e62fdf3bb940b3e0e5d34e9"
   let contract_instance =  new web3Instance.eth.Contract(abi,contract_address)
    contract_instance.methods.mintNFT(account,metadata).send({from: account})
    
  }

    

    return (
        <div className="nft card">
        

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text>
                {description}
                </Card.Text>
                <Button onClick={() => {mintToken()}} variant="primary">MINT</Button>
            </Card.Body>
            </Card>


        </div>
         )
}
