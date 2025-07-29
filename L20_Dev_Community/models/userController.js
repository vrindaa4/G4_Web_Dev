const User = require()

const registerUser = (req, res) =>{
   const  {firstName , lastName , emailId , password} = req.body;

   // VALIDATION 
   if(!firstName || !emailId || !password){
    res.status(400).send({
        message: "Please fill all the fields"
    });
   }
}

module.exports = { registerUser}

// there are 2 types of validation client level aur do aur thi api level validation


//check nthe user existing already in the db or not 

