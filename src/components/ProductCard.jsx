import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

    return (
        <div className="relative group w-[90%] sm:min-w-[250px] sm:w-[250px] bg-white rounded-lg h-[50dvh] shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">

            {/* Badge */}
            {product.badge && (
                <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                    {product.badge}
                </div>
            )}

            {/* Image section */}
            <div className="h-[80%] w-full p-[2px]">
                <Link to={`/product/${product.item_category}/${product.item_id}`} className="w-full h-full aspect-auto">
                    <img
                        src={`${product.productAvatar ? product.productAvatar : "/fallback.png"}`}
                        alt={product.item_name}
                        loading="lazy"
                        onError={(e) => {
                            e.currentTarget.src = "/fallback.png";
                            e.currentTarget.onerror = null;
                        }}
                        className="w-full h-full"
                    />
                </Link>
            </div>

            {/* Product Info */}
            <div className="p-2 h-[25%] text-center">
                <Link to={`/${product.item_category}/${product.item_id}`}>
                    <h2 className="font-semibold text-btn-primary group-hover:text-secondary transition-colors duration-300 truncate">
                        {product.name}
                    </h2>
                </Link>
                <div className="flex items-center justify-center gap-x-4">
                    {product.originalPrice >= product.offeredPrice ? (
                        <>
                            <span className="text-red-500 line-through">₹{product.originalPrice}</span>
                            <span className="text-black font-semibold">₹{product.offeredPrice}</span>
                        </>
                    ) : (
                        <span className="text-green-500 font-bold">₹{product.offeredPrice}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
