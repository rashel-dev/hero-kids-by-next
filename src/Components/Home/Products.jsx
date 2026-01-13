import React from "react";
import ProductCard from "../Cards/ProductCard";
import { getAllProducts } from "@/actions/server/product";

const Products = async () => {
    let products = [];
    try {
        products = await getAllProducts();
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }
    return (
        <div className="mt-10">
            <h2 className="text-center text-4xl font-bold mb-10">Our Products</h2>

            <div className="grid md:grid-cols-3 gap-5">
                {
                    products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;
