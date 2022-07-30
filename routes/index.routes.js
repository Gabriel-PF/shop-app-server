const router = require("express").Router();
const authRoutes = require("./auth.routes");
const adRoutes = require("./ad.routes");
const travelRoutes = require("./travel.routes");
const userRoutes = require("./user.routes")

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);

router.use("/ad", adRoutes);

router.use("/user", userRoutes);

router.use("/travel", travelRoutes);

module.exports = router;
