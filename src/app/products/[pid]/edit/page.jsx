import EditProductForm from '@/components/EditProductForm';
import { getProductById } from '@/lib/product/data';
import React from 'react';

const EditProductPage = async({params}) => {
    const {pid} = await params;


    const product = await getProductById(pid)
    
    return (
        <div>
            <h1 className='text-2xl font-bold'>Edit {product.title}</h1>
            <EditProductForm product={product}/>
        </div>
    );
};


export default EditProductPage;