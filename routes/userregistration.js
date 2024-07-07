const express = require("express");
const router = express.Router();
const Allfunctions = require("../controller/userregistration")

router.post("/nameValidation",Allfunctions.validateNames)

router.post("/passwordValidation",Allfunctions.passwordValidation)

router.post("/emailValidation",Allfunctions.emailValidation)

router.post("/mobileValidation",Allfunctions.mobileNumValidation)



module.exports = router;