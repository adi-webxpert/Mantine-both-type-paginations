import { DatePickerInput } from "@mantine/dates";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

function DateRangePicker({ name, form, lable }: any) {
  return (
    <div>
      <DatePickerInput
        {...form.getInputProps(name)}
        type="range"
        label="Pick dates range"
        placeholder="Pick dates range"
        // value={value}
        // onChange={setValue}
      />
    </div>
  );
}

export default DateRangePicker;
