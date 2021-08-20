const express = require("express")
const router = express.Router()
const User = require("./models/User")
const Admin = require("./models/Admin")

router.post("/registerUser", async (req, res) => {
	const user = new User({
		Name: req.body.name,
		Email: req.body.email,
		RollNo: req.body.rollNo,
	})
	await user.save()
	res.send(post)
})

module.exports = router