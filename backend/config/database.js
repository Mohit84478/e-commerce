import mongoose from "mongoose";
const connectdatabase=async () => {
    await mongoose.connect(process.env.mongo_uri).then(()=>{

         console.log('database connect')
    }).catch((error)=>{
        console.log(error);
        
    })
}
    
export default connectdatabase;