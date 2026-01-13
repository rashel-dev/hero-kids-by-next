import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getAllProducts = async () => {
    try {
        const productsCollection = dbConnect("products");
        const result = await productsCollection.find().toArray();
        return result;
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return [];
    }
};

export const getSingleProduct = async (id) => {
    try {
        if (id.length != 24) {
            return null;
        }
        const productsCollection = dbConnect("products");
        const query = { _id: new ObjectId(id) };
        const result = await productsCollection.findOne(query);
        return result;
    } catch (error) {
        console.error("Failed to fetch product:", error);
        return null;
    }
};
