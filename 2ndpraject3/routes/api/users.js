const router = require('express').Router();
const toolController = require("../../controllers/toolsController");

router.route("/")
.post(toolController.create)

router.route("/:id")
.get(toolController.userfindById)
.put(toolController.update)
.delete(toolController.remove)


module.exports = router;