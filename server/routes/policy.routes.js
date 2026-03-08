const express = require("express")
const router = express.Router()
const policyController = require("../controllers/policy.controller")

router.get("/", policyController.getPolicies)
router.post("/", policyController.createPolicy)

module.exports = router