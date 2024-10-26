import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { OrderDetails } from "@/types/constants";
import { RUPEES_SNIPPET } from "@/utils/constants";
import { formatDate } from "@/utils/helpers";

const OrderAccordion = ({ orderDetail }: { orderDetail: OrderDetails }) => {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center justify-between w-full p-3">
              <p>{formatDate(orderDetail.created_at)}</p>
              <p>
                {RUPEES_SNIPPET}
                {parseInt(orderDetail.total_price).toFixed(0)}
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <table className="w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              {orderDetail.line_items.map((item) => (
                <tbody className="w-full" key={item.id}>
                  <tr className="text-center">
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default OrderAccordion;
