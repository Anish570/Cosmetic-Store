import React from "react";
import ProductCard from "../../../Components/ProductCard";
import SpecialCard from "./SpecialCard";

const ProductSection = ({ products, desired_index = 3 }) => {
    return (
        <div className="min-h-product-section pb-12 bg-yellow-100">
            {products && products.length > 0 ? (
                <div className="flex flex-wrap justify-center items-center gap-6">
                    {products.map((product, index) => (
                        <React.Fragment key={product.id}>
                            {index < 6 && <ProductCard product={product} />}
                            {index === desired_index && <SpecialCard />}
                        </React.Fragment>
                    ))}
                </div>
            ) : (
                <div className="text-center p-4">No products found.</div>
            )}
        </div>
    );
};

export default ProductSection;
