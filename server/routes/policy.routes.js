const router = require("express").Router()

console.log("Policy route loaded")

router.get("/", (req, res) => {
  res.json({
    message: "Policy route working"
  })
})

module.exports = router