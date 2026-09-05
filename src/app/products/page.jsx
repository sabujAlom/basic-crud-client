import { ProductTable } from "@/components/ProductTable";
import { getAllProducts } from "@/lib/product/data";



const ProductsPage = async() => {
    const productData = await getAllProducts();
    
    return (
        <div>
            <h1>Products Page</h1>
            <ProductTable products={productData}/>
        </div>
    );
};

export default ProductsPage;