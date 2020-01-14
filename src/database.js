const mongoose= require('mongoose');
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

mongoose.connect(process.env.CONNECTION_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
   .then(()=>console.log("Connecion OK"))
   .catch(e=>console.log(e));