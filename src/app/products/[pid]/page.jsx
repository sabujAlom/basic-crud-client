import { getProductById } from "@/lib/product/data";
import { Button, Card } from "@heroui/react";
import Image from "next/image";


const productDetails = async({params}) => {
    const pageParams = await params;
    const {pid}=pageParams;
    const data = await getProductById(pid)
    const {title, description, price, image, stock}=data;
    // console.log(data)
    return (
     <div className="px-24 sm:px-12 my-10 lg:my-20">
          <Card className="w-full items-stretch md:flex-row">
      <div className="w-1/2 rounded-2xl">
        <Image
         className="rounded-lg w-full h-full"
          alt={title}
          src={image}
          height={400}
          width={400}/>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
            <p><small className="text-red-500 text-xl font-bold">{stock} </small> 
             items left
            </p>
          <Card.Title className="pe-8 text-2xl text-slate-900">{title}</Card.Title>
          <Card.Description>
             {description}
          </Card.Description>
          
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            
            <span className="text-2xl text-purple-700 font-bold">${price}</span>
          </div>
          <Button className="w-full sm:w-auto">Shop Now</Button>
        </Card.Footer>
      </div>
    </Card>
     </div>
    );
};

export default productDetails;