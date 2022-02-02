const express = require ('express');
const app = express();
const PORT = process.env.PORT || 5000;

const cookieParser = require('cookie-parser');
const cors = require ('cors');
//const mongoose = require ('mongoose');

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send(`I am in the correst route on port ${PORT}`)
});

app.listen(PORT, () => console.log(`Listenon port ${PORT} for requests...`))