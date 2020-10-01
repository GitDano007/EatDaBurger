var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((data) => {
        var handlebarObj = {
            burgers: data
        };
        console.log(handlebarObj);
        res.render("index", handlebarObj);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        (result) => {
            res.json({ id: result.insertId });
        });
});

router.put("/api/burgers/:id", (req, res) => {
    var status = "id = " + req.params.id;

    console.log("condition", status);

    burger.update(
        {devoured: req.body.devoured},
        status, (result) => {
            if (result.changedRows ==0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

module.exports = router;