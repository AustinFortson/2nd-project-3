
const router = require("express").Router();
const toolsRoutes = require("./tools")
const usersRoutes = require("./users")

//route to search page
router.use("/tools", toolsRoutes);
router.use("/users", usersRoutes);

module.exports = router;