const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

// middleWare //
app.use(cors());
app.use(express.json());

app.get( '/' , (req,res) => {
    res.send('boss is setting')
})

app.listen( port , () => {
    console.log(`bistro boss running on port :${port}`)
})