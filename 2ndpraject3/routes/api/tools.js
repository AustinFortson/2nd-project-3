const router = require('express').Router();
const toolController = require("../../controllers/toolsController");

router.route("/")
.get(toolController.findAll)

router.route("/:id")
.get(toolController.toolfindById)


module.exports = router;