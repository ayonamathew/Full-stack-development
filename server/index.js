//Creating the Backend API

const express = require('express');
const   cors = require('cors');

const port = 3001;

const app = express();
app.use(cors());

app.get('/', (req,res) => {

    const data = [
        { id: 1, name: "Ayona" },
        { id:2, name:"Dan" },
        { id:3, name:"Appu"}
    ];
    res.json(data)
})

app.listen(port, () => {

    console.log(`the server is runing in portb : ${port}`);
});

