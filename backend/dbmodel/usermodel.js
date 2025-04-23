import mongoose from "mongoose";
const usermodel=new mongoose.Schema({
    fullname:{
        type: String,
        require:true

    },
    username:{
         type:String,
        require:true,
        unique:true

    },
    password:{
       type: String,
        require:true

    },
    gmail:{
        type: String,
        require:true

    },
    gender:{
         type:String,
        enum:["male","female"],
        require:true

    },
    cart:{
        type:Object,
         default:{}

   },


})
export const usermodels=mongoose.model("user",usermodel)
export default usermodels