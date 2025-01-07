import { Bill as IBill } from "@/_services/PaymentService";
import { Flex, Table, Text } from "@radix-ui/themes";

interface BillProps {
  bill: IBill;
}

const Bill = ({ bill }: BillProps) => {
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
