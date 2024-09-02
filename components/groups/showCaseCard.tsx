import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShowCardComponentProp } from "@/types/component";
import { showCaseList } from "@/utils/constants";
import Image from "next/image";
import { FC } from "react";

const ShowCardListComponent = () => {
  return (
    <>
      <h1 className="font-bold sm:text-[1.5rem]">NEW ARRIVALS</h1>
      <div className="flex flex-col sm:flex-row items-center  sm:items-start justify-center sm:justify-evenly gap-5">
        {showCaseList.map((item) => (
          <ShowCaseCardComponent key={item.id} showCaseCard={item} />
        ))}
      </div>
    </>
  );
};

const ShowCaseCardComponent: FC<ShowCardComponentProp> = (props) => {
  //props
  const { showCaseCard } = props;

  return (
    <Card className="w-70 sm:w-[300px] sm:p-0 sm:rounded-lg">
      <CardHeader className="sm:w-[300px] sm:p-0">
        <Image
          className="sm:rounded-t-lg"
          width={300}
          height={150}
          src={showCaseCard.image}
          alt="show-case-card"
        />
        <CardTitle className="sm:w-[300px]">{showCaseCard.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>explore more</CardDescription>
      </CardContent>
      {/* <CardFooter>
        <Button>Button</Button>
      </CardFooter> */}
    </Card>
  );
};

export default ShowCardListComponent;
