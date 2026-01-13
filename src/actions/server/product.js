import { dbConnect } from "@/lib/dbConnect";

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
