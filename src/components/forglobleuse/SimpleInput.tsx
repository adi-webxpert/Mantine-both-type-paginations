import { TextInput } from "@mantine/core";

function SimpleInput({ label, description, form, name }: any) {
  return (
    <>
      <TextInput
        label={label}
        description={description}
        {...form.getInputProps(name)}
      />
      ;
    </>
  );
}

export default SimpleInput;
