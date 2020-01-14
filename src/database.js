const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://Franky:packman@cluster0-gyova.gcp.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
   .then(()=>console.log("Connecion OK"))
   .catch(e=>console.log(e));