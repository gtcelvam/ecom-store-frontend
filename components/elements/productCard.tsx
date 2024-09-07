import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductCardComponentProp } from "@/types/component";
import Image from "next/image";
import { FC } from "react";

const ProductCard: FC<ProductCardComponentProp> = (props) => {
  //props
  const {
    card,
    className = "",
    classHead = "",
    width = 300,
    height = 150,
  } = props;

  return (
    <Card className={`w-70 sm:w-[300px] sm:p-0 sm:rounded-lg ${className}`}>
      <CardHeader className={`sm:w-[300px] p-0 ${classHead}`}>
        <Image
          className="sm:rounded-t-lg"
          width={width}
          height={height}
          src={card.image}
          alt="show-case-card"
        />
        <CardTitle className="sm:w-[300px] px-2">{card.title}</CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <CardDescription>explore more</CardDescription>
      </CardContent>
      {/* <CardFooter>
        <Button>Button</Button>
      </CardFooter> */}
    </Card>
  );
};

export default ProductCard;
