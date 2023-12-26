import db from "./db";
import Product from "@/models/Product";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createProduct = async (formData) => {
    const { name, images } = Object.fromEntries(formData);
    try {
        db.connect()
        const newProduct = new Product({
            name,
            images: [images],
      
        });
        await newProduct.save();
    } catch (error) {
        throw new Error('Failed to Create Product ' + error);

    }
    revalidatePath("/admin");
    redirect("/admin");

}