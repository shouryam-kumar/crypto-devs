const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS,  METADATA_URL } = require("../constants");

async function main() {

    //address of the already deployed whitelisted contract
    const whitelistContract = WHITELIST_CONTRACT_ADDRESS;

    // URL from which we can extract the metadata for Crypto dev nft
    const metadataURL = METADATA_URL;


    //create an abstract instance for he contract to deploy
    const cryptodevsContract = await ethers.getContractFactory("CryptoDevs");

    //deploy the contract
    const deployedCryptoDevsContract = await cryptodevsContract.deploy(
        metadataURL,
        whitelistContract
    )

    //wait for the contract to be deployed
    await deployedCryptoDevsContract.deployed();
    

    //print the address of the deployed contract
    console.log(
        "Crypto Devs Contract Address:",
        deployedCryptoDevsContract.address
    );


}

//Call the main function and check if there is any error

main()
    .then(()=>[
        process.exit(0)
    ])
    .catch((err)=>{
        console.error(err);
        process.exit(1);
    })


