const express = require("express");
const userRegistrationRoutes = require("./routes/userregistration")

const app = express();



app.use(userRegistrationRoutes)

const errorHandlingMiddleWare = (err,req,res,next)=>{
    // console.log(err.message);
    res.status(err.status).json({
        success: false,
        message: err.message,
    });
}

app.use(errorHandlingMiddleWare)

app.listen(10000,()=>{
    console.log("server is running on port 10000");
})