    import {v2 as cloudinary} from "cloudinary"
import productdata from "../dbmodel/product.js";
// add product
   const addproduct= async (req,res) => {
     try {
      const {name,price,size,detail,category,color}=req.body;
      // if (!size) {
      //    return res.json({ success: false, message: "Size is required." });
      //  }
      const image1= req.files.image1 && req.files.image1[0]
      const image2= req.files.image2 && req.files.image2[0]
      const image3= req.files.image3 && req.files.image3[0]
      const image4= req.files.image4 && req.files.image4[0]
const images=[image1,image2,image3,image4].filter((item)=>item !==undefined)

let imageurl =await Promise.all(
   images.map(async(item)=>{
      let result =await cloudinary.uploader.upload(item.path,{resource_type:'image'});
      return result.secure_url
   })
)

 const productlist={
   name,
  size,
   price ,
   image:imageurl,
   category,
   detail,
   color,

 }
 const productitem= new productdata(productlist)
 await productitem.save()
 res.json({sucess:true,message:"done"})
 
 
 
 
 
 
 
 console.log(productitem);
 console.log(imageurl);
  




     } catch (error) {
      console.log(error);
      
      res.json({sucess:false,message:error.message})
      
     }



   }
    

      
//  product list 
const productlist= async (req,res) => {

   try {
      const prodlist=await productdata.find({})
       res.json({scusee:true,prodlist})
   } catch (error) {
      console.log(error);
      
      res.json({sucess:false,message:error.message})
   }



    
}

      
//  remove product 
const removeproduct= async (req,res) => {

    try {
      await productdata.findByIdAndDelete(req.body.id) 
      res.json({scusee:true,message:"product remove"})
    } catch (error) {
      console.log(error);
      
      res.json({sucess:false,message:error.message})
    }

    
}

       
//  product list 
const singleproduct= async (req,res) => {
   try{

      const {productid}=req.body;
      const prodlist= await productdata.findById(productid)
      res.json({scusee:true,prodlist})
   }
catch(error){
   console.log(error);
      
   res.json({sucess:false,message:error.message})
}


}
export {addproduct,productlist,removeproduct,singleproduct}