import { MultiSelect } from "@mantine/core";

function MultiSelectInput({lable , data ,  name ,form} : any) {
  return (
    <div>
      <MultiSelect
        {...form.getInputProps(name)}
        label={lable}
        placeholder="Pick value"
        data={data}
        searchable
        hidePickedOptions
      />
    </div>
  );
}

export default MultiSelectInput;
