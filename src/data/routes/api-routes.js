//our file requirements
const router = require("express").Router();
const User = require("../models/user");

//our router methods we will use in the other file
//first is the post method to make more users
router.post("/api/newUser", ({ body }, res) => {
    User.create(body).then(dbEntry => {
        res.json(dbEntry)
    })
    .catch(error => {
        res.status(400).json(error);
    });
});

//this get method will get all the users from the database and sort it based on hire date
router.get("/api/users/byDate", (req, res) => {
    User.find({}).sort({ hireDate: -1 })
    .then(dbEntry => {
        res.json(dbEntry);
    })
    .catch(error => {
        res.status(400).json(error);
    });
});

//this get method will get all the users from the database and sort it based on username
router.get("/api/users/byUsername", (req, res) => {
    User.find({}).sort({ userName: -1 })
    .then(dbEntry => {
        res.json(dbEntry);
    })
    .catch(error => {
        res.status(400).json(error);
    });
});

//this get method will get all the users from the database and sort it based on first Name
router.get("/api/users/byDate", (req, res) => {
    User.find({}).sort({ firstName: -1 })
    .then(dbEntry => {
        res.json(dbEntry);
    })
    .catch(error => {
        res.status(400).json(error);
    });
});

//this get method will get all the users from the database and sort it based on last Name
router.get("/api/users/byDate", (req, res) => {
    User.find({}).sort({ lastName: -1 })
    .then(dbEntry => {
        res.json(dbEntry);
    })
    .catch(error => {
        res.status(400).json(error);
    });
});

//the final get method will be able to find a specific user from the collection in the database
router.get("/api/users/:userName", (req, res) => {
    //collect our username we are searching for out of the request parameters
    const searchUser = req.params.userName;

    User.find({ userName: searchUser }).then(dbEntry => {
        res.json(dbEntry);
    }).catch(error => {
        res.status(400).json(error);
    });
});

module.exports = router;