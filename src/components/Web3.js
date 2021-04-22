import React, {useState, useEffect} from 'react'

import compiled_contract from './contract_abi.json'
import Web3 from 'web3';

function App() {
  const [account, setAccount] = useState('')
  const [abi, setAbi] = useState('')
  const [web3Instance, setWeb3Instance] = useState()
  const [smartContract, setSmartContract] = useState()

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

const getContractInstance = () => {
let contract_address = "0x09aa12e09c6c31113e62fdf3bb940b3e0e5d34e9"
 let contract_instance =  new web3Instance.eth.Contract(abi,contract_address)
 setSmartContract(contract_instance)
}

const mintToken = () => {  
  getContractInstance()
  console.log(smartContract.methods)
  smartContract.methods.mintNFT(account,"http://localhost").send({from: account})
}

  return (
    <div className="App"> 
    
      <h1 className="App-header">   Smart Contract Practice!   </h1>

      <button onClick={() => {mintToken()}}>Click me!</button>
    </div>
  );
}

export default App;


// https://ethereum.stackexchange.com/questions/25431/metamask-how-to-access-call-deployed-contracts-functions-using-metamask
