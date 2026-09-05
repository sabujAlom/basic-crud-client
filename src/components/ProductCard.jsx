import {CircleDollar} from "@gravity-ui/icons";
import {Button, Card, Link} from "@heroui/react";
import Image from "next/image";

export function ProductCard({product}) {
  const {title, description, price, image}=product;
  return (
    <Card className="w-[400px]">
       <Image src={image} alt={title} width={400} height={400}/>

       <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Header>
        <div>
           <p>$ {price}</p>
        </div>
      <Card.Footer>
         <Button>
            View Details
         </Button>
      </Card.Footer>
      
    </Card>
  );
}