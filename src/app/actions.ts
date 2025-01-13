"use server"

import {connectDB} from "@/libs/mongodb";
import {EnrichedProducts} from "@/types/types";
import {Product} from "@/models/Products";

export const getAllProducts = async () =>{
    try{
        await connectDB();
        const products: EnrichedProducts[] = await Product.find();
        return products; 
    } catch (error){
        console.error("Error getting products:", error);
        throw new Error("Failed to fetch category products");
    }
}