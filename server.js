/// require / module.exports : only modules (var, functions)
// html : we cant require or exports bc it is static file
// step 1
const express = require("express");
const isAuth = require("./middleware");
const router = require("./app");
// step2 : instanciation de l'express
const app = express();
// bodyparser
app.use(express.json());
// using middleware
//1st meth
app.use(isAuth);

//2nd meth
// app.get('/',isAuth, (req,res)=> {res.send({msg: 'success})})
// lecture des fichiers statiques : html
// app.use : meth global middleware
// middlware global : express.static("public")
// express.static("public") : read all static files
// app.use(express.static("public"));

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
app.get("/service", (req, res) => {
    res.sendFile(__dirname + "/public/services.html");
});

app.use("/", router);
// step3 : port
const port = 5000;
// step4 : création du server

app.listen(port, (err) =>
    err
        ? console.error(err)
        : console.log(`this server is running on port : ${port}`)
);
