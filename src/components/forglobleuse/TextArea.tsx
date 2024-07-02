import { Textarea } from "@mantine/core";
import React from "react";

function TextArea({ lable, form, description, name }: any) {
  return (
    <div>
      <Textarea
        size="md"
        {...form.getInputProps(name)}
        label={lable}
        description={description}
        placeholder="Input placeholder"
      />
    </div>
  );
}

export default TextArea;
