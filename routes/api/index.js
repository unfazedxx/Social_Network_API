const router = require("express").Router();
const userRoutes = require("./userRoute");
const thoughtRoutes = require("./thoughtRoute");
console.log("test2")

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);
module.exports = router;