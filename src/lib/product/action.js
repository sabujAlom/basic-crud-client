import { revalidatePath } from "next/cache";

export const addProduct = async(formdata)=>{
    'use server';
    const newProduct = Object.fromEntries(formdata.entries())
    // console.log(newProduct)
    const modifiedData ={
        title: newProduct.title,
        price: parseFloat(newProduct.price),
        stock: parseFloat(newProduct.stock),
        description: newProduct.description,
        image: newProduct.image,
    };
    const res = await fetch("http://localhost:8000/products",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(modifiedData)
    });
    const data = await res.json();
    if(!res.ok){
        return;
    }
    revalidatePath("/products");
    return data;

}