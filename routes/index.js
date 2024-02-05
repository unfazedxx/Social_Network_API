const router = require("express").Router();
const apiRoutes = require("./api")
console.log('test1')
router.use("/api", apiRoutes);

router.use ((req, res) => {
    res.status(400).json(err);
})

module.exports = router