// routing
// CRUD operations : get , post , put , delete

const express = require("express");

const router = express.Router();
// array : [1,'a', {}]
// object : {id : 1}
let users = [
    { id: 1, name: "mohamed" }, //el
    { id: 2, name: "soumaya" }, //el
];
//routing test - route
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
router.put("/update/:id", (req, res) => {
    //const id = req.params.id
    const { id } = req.params;
    users = users.map((el) => (el.id == id ? { ...el, ...req.body } : el));
    res.send({ users });
});
// delete
router.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send({ users });
});

module.exports = router;
