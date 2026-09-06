import { getProductById } from "@/lib/product/data";
import { Card } from "@heroui/react";
import Image from "next/image";


const productDetails = async({params}) => {
    const pageParams = await params;
    const {pid}=pageParams;
    const data = await getProductById(pid)
    const {title, description, price, image, stock}=data;
    console.log(data)
    return (
       <Card>
            <div>
                <Image src={image} height={400} width={400}/>
            </div>
            <div>
                <small>{stock}</small>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>$ {price}</p>
            </div>
       </Card>
    );
};

export default productDetails;