console.log("Policy controller loaded")

const getPolicies = (req, res) => {
  res.json({
    success: true,
    message: "List of policies"
  })
}

const createPolicy = (req, res) => {
  const data = req.body

  res.json({
    success: true,
    message: "Policy created",
    data
  })
}

module.exports = {
  getPolicies,
  createPolicy
}