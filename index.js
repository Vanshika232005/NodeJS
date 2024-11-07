// let http = require('http');
// require('dotenv').config()

// const port = process.env.PORT || 4000;

// let server = http.createServer((req,res)=> {

//     if(req.url=="/")
//         {
//             res.end("<h1>Welcome to Home</h1>");
        
//         }
//     else if(req.url=="/about")
//                 {
//                     res.end("<h1>this is about homepage</h1>");
               
//                 }
        
//     else{
//         res.writeHead(404);
//         res.end("<h1> PAGE NOT FOUND</h1>");
//         }
        
//     res.end('<h1>Welcome to my Website</h1>')
// });
    


// server.listen(port, ()=>{
//     console.log('Server is running on port', port)
// })


// const express = require("express");
// const app = express();

// require("dotenv").config();

// const port = process.env.PORT || 5000;

// app.post("/", (req, res) =>{
//     res.send("<h1>Welcome to Home</h1>");

// });

// app.get("/", (req, res) =>{
//     res.send("<h1>Welcome to Home</h1>");

// });

// app.get("/about", (req, res) =>{
//     res.send("<h1>Welcome to About page</h1>");

// });

// app.get("/school", (req, res) =>{
//     res.send("<h1>Welcome to school page</h1>");

// });

// app.listen(port, ()=>{
//         console.log('Server is running on port', port)
//     })
    

const express = require("express");
const app = express();

require("dotenv").config();

const path = require("path");

const port = process.env.PORT || 6002;

app.get("/", (req, res) =>{
    res.sendFile(path.join((__dirname + 'public', 'html', 'about.html')))

});

app.get("/about", (req, res) =>{
        res.sendFile(path.join((__dirname + 'public', 'html', 'about.html')))
    
});

// app.get("/school", (req, res) =>{
//         res.sendFile(path.join((__dirname + 'public', 'html', 'school.html')))
    
// });


app.listen(port, ()=>{

    console.log('Server is running on port', port)
});