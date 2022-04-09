// routing
// CRUD operations : get , post , put , delete

const express = require("express");

const router = express.Router();
// array : [1,'a', {}]
// object : {id : 1}
let users = [
    { id: 1, name: "mohamed" },
    { id: 2, name: "soumaya" },
];
//routing test
router.get("/test", (req, res) => {
    res.send({ msg: "testing route" });
});
// {key: value} => {users}<=> {users:users}
// get
router.get("/users", (req, res) => {
    res.send({ users });
});
// post
// body : req.body : input
router.post("/add", (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.send({ newUser, users });
});
// put

// delete

module.exports = router;
