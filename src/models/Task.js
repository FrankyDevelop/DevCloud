const{Schema,model} =require('mongoose');

const taskSchema=new Schema({
    task:{
        type:String,
        required:true
    },
    description:String
})

//exportamos taskSchema
module.exports=model('Task',taskSchema);