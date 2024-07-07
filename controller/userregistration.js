const { json } = require("express")

const validateNames = (req,res,next)=>{
    let firstName = req.query.firstname;
    let lastName = req.query.lastname;
    if(firstName[0] === firstName[0].toUpperCase() && lastName[0] === lastName[0].toUpperCase()){
        console.log("IF")
        res.json({
            message: "validate Name API has been called"
        })
    }else{

        next({
            status: 400,
            message: "Invalid Name kindly eneter first letter in uppercase of firstname and lastname"
        })
    }
    
}


const passwordValidation = (req,res,next)=>{


    let password = req.query.password;
    const regex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

    if(!regex.test(password)){
        next({
            status:400,
            message:"Your password must have a uppercase, a lowercase & a special character and it should be of minimun eight characters"
        })
    }else{
        res.status(200).json({
            message: "Password is valid"
        })
    }
}


const emailValidation = (req,res,next)=>{
    let email = req.query.email;
    console.log(email);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(email)){
        console.log("eeror fri ud");
        next({
            status:400,
            message:"Invalid email address  (kindly enter valid email address)"
        })
    }
    res.status(200).json({
        message:"email validation api has been called"
    })
}

const mobileNumValidation = (req,res,next)=>{

    let mobileno = req.query.phoneNumber;

    console.log(mobileno);

    const regex = /^\D*(\d\D*){10,}$/;

    if(!regex.test(mobileno)){
        next({
            status:400,
            message:"Invalid mobile number kindly enter valid mobile number"
        })
    }else{
        res.status(200).json({
            message:"Mobile Number has been validated"
        })
    }
       
}

const Allfunctions = {
    validateNames,
    passwordValidation,
    emailValidation,
    mobileNumValidation
}


module.exports = Allfunctions;