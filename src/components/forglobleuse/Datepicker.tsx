import React, { useState } from "react";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import {DatePickerInput } from "@mantine/dates";

function Datepicker({ name, lable, form }: any) {
  return (
    <div>
      <DatePickerInput
        label={lable}
        placeholder="Pick date"
        {...form.getInputProps(name)}
        //   value={value}
        //   onChange={setValue}
        dropdownType="modal"
      />
    </div>
  );
}

export default Datepicker;
