import { getAllProducts } from "@/lib/product/data";
import { ProductCard } from "./ProductCard";


const PopularProduct = async() => {
    const productData =await getAllProducts();
    
    
    return (
        <div>
            <h1 className="font-bold text-3xl">Popular product</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1">
                {
                    productData.map((product)=><ProductCard key={product._id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default PopularProduct;