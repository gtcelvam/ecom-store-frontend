import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProductCard = () => {
  return (
    <Card className="w-40">
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>Description</CardDescription>
      </CardContent>
      <CardFooter>
        <Button>Button</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
