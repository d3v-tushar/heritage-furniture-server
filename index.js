const express = require('express');
const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const crypto = require('crypto');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

//Middleware
app.use(cors());
app.use(express.json());

// DB_USER=heritage-furniture
// DB_PASS=tushar2151
// PORT=4000
// ACCESS_TOKEN=27cb39b961403972b0b938dcb5105160e3c4230b06756fcd98d28dd5918877476e496bbf70aeddbf9e0b65cb60cc64346c2bf9faf2583287c76dacf8d1d68224


//MongoDB
const uri = `mongodb+srv://${'heritage-furniture'}:${'tushar2151'}@learnph.159fxoq.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

//Verify JWT Token
// const verifyJWT = (req, res, next) =>{
//     const authHeader = req.headers.authorization;
//     if(!authHeader){
//         return res.status(401).send({message: 'unauthorized access'});
//     }
//     const token = authHeader.split(' ')[1];

//     jwt.verify(token, process.env.ACCESS_TOKEN, (error, decoded) =>{
//         if(error){
//             return res.status(403).send({message: 'Forbidden Access'});
//         }
//         req.decoded = decoded;
//         next();
//     });
// };

app.get('/', (req, res) =>{
    res.send('Heritage Furniture Server is Running')
});

app.listen(port, () =>{
    console.log(`Heritage Furniture Server is on port: ${port}`)
});