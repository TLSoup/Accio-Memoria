const express = require ('express');
const app = express();
const PORT = process.env.PORT || 5000;

const cookieParser = require('cookie-parser');
const cors = require ('cors');
//const mongoose = require ('mongoose');

/* To-Do: 
    Create Routes
        * Tasks
        * Set up MongoDB/Atlas
*/

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', require('./routes/users.routes'));
app.use('/tasks', require('./routes/task.route'));

app.get("/", (req, res) => {
    res.send(`I am in the correst route on port ${PORT}`)
});

app.listen(PORT, () => console.log(`Listenon port ${PORT} for requests...`))

