import express from "express"
import { addproduct, productlist, removeproduct, singleproduct } from "../controller/productcontroller.js"
import upload from "../middleware/multer.js"

const productrouter = express.Router()


productrouter.post("/add", upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 }
]),
    addproduct)
productrouter.post("/remover", removeproduct)
productrouter.post("/single", singleproduct)
productrouter.get("/list", productlist)

export default productrouter