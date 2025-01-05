import PaymentService, { Bill as IBill } from "@/_services/PaymentService";
import { Seat } from "@/_services/SeatService";
import { Show } from "@/_services/ShowService";
import { Flex, Table, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

interface BillProps {
  show: Show;
  selectedSeats: Seat[];
}

const Bill = ({ show, selectedSeats }: BillProps) => {
  const [bill, setBill] = useState<IBill>();

  useEffect(() => {
    (async () => {
      const generatedBill = await PaymentService.generateBill(
        show.id,
        selectedSeats
      );
      setBill(generatedBill);
    })();
  }, []);

  if (!bill) {
    return null;
  }

  return (
    <Table.Root variant="surface">
      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>
            <Flex direction="column">
              <Text color="gray">Tickets Price</Text>
              <Text color="gray">Convenience Fee</Text>
            </Flex>
          </Table.RowHeaderCell>
          <Table.Cell>
            <Flex direction="column" align="end">
              <Text color="gray">
                Rs. {bill.price} x {bill.quantity}
              </Text>
              <Text color="gray">Rs. {bill.convenienceFee}</Text>
            </Flex>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>
            <Text weight="medium">Total</Text>
          </Table.RowHeaderCell>
          <Table.Cell>
            <Flex direction="column" align="end">
              <Text weight="medium">Rs. {bill.total}</Text>
            </Flex>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};

export default Bill;
