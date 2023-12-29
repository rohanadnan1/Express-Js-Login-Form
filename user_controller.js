const registerUser = (req, res) => {
    res.json({
        "success": true,
        "name": req.body.username,
        "email": req.body.email,
        "password": req.body.password
    })
    console.log(req.body)
}

module.exports = registerUser