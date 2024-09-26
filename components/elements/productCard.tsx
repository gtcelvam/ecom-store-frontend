import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductCardComponentProp } from "@/types/component";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { pageRoutes } from "@/utils/constants";

const ProductCard: FC<ProductCardComponentProp> = (props) => {
  //props
  const {
    card,
    className = "",
    classHead = "",
    classImage = "",
    width = 300,
    height = 150,
    href = pageRoutes.products,
  } = props;

  return (
    <Card className={`w-70 sm:w-[300px] sm:p-0 sm:rounded-lg ${className}`}>
      <CardHeader className={`sm:w-[300px] p-0 ${classHead}`}>
        <Image
          className={classImage + " sm:rounded-t-lg"}
          width={width}
          height={height}
          src={card.image.src}
          alt="show-case-card"
        />
        <CardTitle className="sm:w-[300px] px-2">{card.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between px-2">
        <CardDescription>explore more</CardDescription>
        <Link href={href}>
          <DoubleArrowRightIcon className="font-bold" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
