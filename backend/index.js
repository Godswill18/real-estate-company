const express = require('express');
const app = express();
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const adminsRoute = require("./route/admins");
const authRoute = require("./route/auth");
const pagePost = require('./route/pagePost')
const cors = require('cors');

dotenv.config();


mongoose.connect(
    process.env.MONGO_URI, 
    {
        useNewUrlParser: true, useUnifiedTopology: true
    }) .then(() => {
        console.log('connected to backend sever....')
    }).catch((err) => {
        console.error('Error connecting to MongoDB', err.message);
    }); 
        
    



// //middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

// app.get("/login", (req, res)=> {
//     res.send("Login")
// })

app.use("/api/admin", adminsRoute);
app.use("/api/auth", authRoute);

// app.post('/register', (req, res) => {
//     const {username, password} = req.body;
//     res.json({requestData: {username,password}});
// })
// app.use('/article', pagePost);




const port = 8000

app.listen(port, () => {
    console.log(`Server is listening to port ${port}.....`);
})
 