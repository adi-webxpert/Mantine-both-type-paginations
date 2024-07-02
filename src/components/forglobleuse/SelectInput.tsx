import { Select } from "@mantine/core";

function SelectInput({ label, description, data, name, form }: any) {
  return (
    <Select
      label={label}
      placeholder={description}
      data={data}
      {...form.getInputProps(name)}
      defaultValue="React"
      clearable
      allowDeselect
    />
  );
}

export default SelectInput;
