import mongoose from "mongoose";
const product = new mongoose.Schema({
    name: {
        type: String,
        unique:true,
        require: true

    },
    size: {
        type: String,
        require: true
        

    },
    price: {
        type: Number,
        require: true

    },
    image: {
        type: Array,
        require: true
    },
    category: {
        type: String,
        require: true

    },

    detail: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    }





})
export const productdata = mongoose.model("product", product)
export default productdata