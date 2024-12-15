import { Button, Checkbox, DropdownMenu, Flex, Text } from "@radix-ui/themes";

interface DropdownProps {
  label: string;
  values: string[];
  selectedValues: string[];
  onChange: (value: string, checked: boolean | "indeterminate") => void;
}

const Dropdown = ({
  label,
  values,
  selectedValues,
  onChange,
}: DropdownProps) => {
  if (!values) return null;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft" size="3">
          {label}
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {values.map((value) => (
          <Text key={value} as="label" size="2">
            <Flex align="center" gap="3" p="1">
              <Checkbox
                checked={selectedValues.includes(value)}
                onCheckedChange={(checked) => onChange(value, checked)}
                value={value}
              />
              {value}
            </Flex>
          </Text>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
