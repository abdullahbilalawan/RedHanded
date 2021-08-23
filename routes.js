const express = require("express")
const router = express.Router()
const Admin = require("./models/Admin")

router.post("/SignUp", async (req, res) => {
	const admin = new Admin({
		Name: req.body.name,
		Email: req.body.email,
		Password: req.body.password,
		
	})
	await user.save()
	res.send(post)
})

module.exports = router