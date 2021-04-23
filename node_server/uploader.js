const pinataSDK = require('@pinata/sdk');


const API_Key = "e130817159a5ac6fd66a"
 const API_Secret =  "57de5b48bc88c90531c4ab16e6efe5ab773383cb3b0e1fb60bdc29e078b40a1d"
 const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJlMjNkMzg2NS01NTllLTRiMzctYTFkZi1jMDg0YzEzZTdhZWQiLCJlbWFpbCI6ImFscXVpbWlzdGEyODkxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2V9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJlMTMwODE3MTU5YTVhYzZmZDY2YSIsInNjb3BlZEtleVNlY3JldCI6IjU3ZGU1YjQ4YmM4OGM5MDUzMWM0YWIxNmU2ZWZlNWFiNzczMzgzY2IzYjBlMWZiNjBiZGMyOWUwNzhiNDBhMWQiLCJpYXQiOjE2MTkyMTA5MDJ9._1W1aOO1hbaxKqmUdzokqwoCThjUg7nShhOJ2IwAAeU"

 const pinata = pinataSDK(API_Key,API_Secret);


 pinata.testAuthentication().then((result) => {
    //handle successful authentication here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});


const fs = require('fs');
const readableStreamForFile = fs.createReadStream('/Users/ellarnol/Desktop/lol.jpeg');
const options = {
    pinataMetadata: {
        name: 'Dummy',
        keyvalues: {
            customKey: 'customValue',
            customKey2: 'customValue2'
        }
    },
    pinataOptions: {
        cidVersion: 0
    }
};
pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});