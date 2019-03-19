const router = require('express').Router();
const db = require('../../models')
// const toolController = require("../../controllers/toolsController");

router.route("/").get(function(req,res){
    db.Tool
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

router.route("/:name").get(function(req,res){
    db.Tool
        .findById(req.params.name)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})


module.exports = router;