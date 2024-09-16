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
import { ProductListCardComponentProps } from "@/types/component";
import {
  EyeOpenIcon,
  HeartFilledIcon,
  HeartIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { pageRoutes, RUPEES_SNIPPET } from "@/utils/constants";

const ProductListCard: FC<ProductListCardComponentProps> = (props) => {
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

  //constants
  const isLiked = false;

  return (
    <Card className={`w-70 sm:w-[300px] sm:p-0 sm:rounded-lg ${className}`}>
      <CardHeader className={`relative sm:w-[300px] p-0 ${classHead}`}>
        <Image
          className={classImage + " sm:rounded-t-lg"}
          width={width}
          height={height}
          src={card.image}
          alt="show-case-card"
        />
        {Boolean(!isLiked) && (
          <HeartIcon
            className="absolute top-0 left-3 text-shop-primary"
            width={25}
            height={25}
          />
        )}
        {Boolean(isLiked) && (
          <HeartFilledIcon
            className="absolute top-0 left-3 text-shop-primary"
            width={25}
            height={25}
          />
        )}
        <CardTitle className="sm:w-[300px] px-2 mt-5">{card.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between px-2 mt-2">
        <CardDescription>
          {RUPEES_SNIPPET}
          {card.price}
        </CardDescription>
        <div className="flex items-center gap-5">
          <Link href={href}>
            <EyeOpenIcon className="font-bold" width={18} height={18} />
          </Link>
          <PlusIcon className="font-bold" width={18} height={18} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductListCard;
