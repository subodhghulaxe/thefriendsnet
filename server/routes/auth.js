const router = require("express").Router();

router.post("/register", async (req, res) => {
  res.send("Its auth route");
});

module.exports = router;