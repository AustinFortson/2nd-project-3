const router = require('express').Router();
const db = require('../../models')

router.route("/").post(function(req,res){
    db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => {
        console.log(err);
        res.status(422).json({"error": "something went wrong"});
        });
        console.log(req.body)
})

router.route("/:name").get(function(req,res){

    db.User
        .findById({name: req.params.name})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

}).put(function(req,res){

    db.User
        .findOneAndUpdate({ id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

}).delete(function(req,res){

    db.User
        .findById({ name: req.params.name })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})


module.exports = router;