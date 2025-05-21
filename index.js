const express = require('express');
const { Wallet } = require('ethers');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/generate-wallet', (req, res) => {
  const wallet = Wallet.createRandom();
  res.json({
    address: wallet.address,
    privateKey: wallet.privateKey
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Wallet generator running...');
});