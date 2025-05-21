const express = require('express');
const { ethers } = require("ethers");

const app = express();
const PORT = process.env.PORT || 3000;

function generateWallet() {
    const wallet = ethers.Wallet.createRandom();
    return {
        address: wallet.address,
        privateKey: wallet.privateKey,
    };
}

app.get('/', (req, res) => {
    const wallet = generateWallet();
    res.json(wallet);
});

app.listen(PORT, () => {
    console.log(`Wallet generator running on port ${PORT}...`);
});