import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {type:String, required:true},
    // description: {type:String, required:true},
    // price: {type: Number, required: true},
    // details: {type:String},
    // brand: {type:String},
    // colors: {type:String},
    // sizes: {type:String},
    // gender: {type:String},
    images: [{type: String}],
    // category: {type:mongoose.Types.ObjectId, ref:'Category'},
}, {timestamps: true})

export default mongoose?.models?.Product || mongoose.model("Product", ProductSchema)

