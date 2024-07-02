import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import { AppList } from "./AppList";
import axios from "axios";
import SimpleInput from "./forglobleuse/SimpleInput";
function MultiSelectuse() {
  const form = useForm({
    mode: "controlled",
    initialValues: { Name: "", Email: "", Age: "", No: "" },
    validate: {
      Name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      Email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      Age: (value) => (value.length<  2 ? 'You must be at least 10 to register' : null),
      No: (value)=> (value.length < 1  ? "Please enter mobile number" : null ),
    },
  });

  const [formValues, setFormValues] = useState<any>();
  const [apidata, setApidata] = useState<any>();

  form.watch("primary", ({ value }) => {
    setFormValues(value);
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await axios.get(
          "https://6516ab5609e3260018ca1cfa.mockapi.io/userlist"
        );
        setApidata(apiData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (formValues == 1) {
      form.setFieldValue("second", "1");
    } else if (formValues == 0) {
      form.setFieldValue("second", "0");
    }
  }, [formValues]);

  const options =
    formValues == 1 ? [{ label: "Please select value", value: "1" }] : apidata;

  function handleFormValue() {}

  form.watch("Name", ({ value }) => {
    console.log("value", value);
  });
  return (
    <div>
      Multi----------Select
      <AppList
        label={<>Primary question thArrow</>}
        description=""
        clearable={false}
        allowDeselect={false}
        options={[
          { label: "Api Data", value: "0" },

          { label: "Please select value", value: "1" },
        ]}
        {...form.getInputProps("primary")}
      />
      {formValues !== undefined ? (
        <AppList
          label={<>Second question thArrow</>}
          description=""
          clearable={false}
          allowDeselect={false}
          options={options}
          {...form.getInputProps("second")}
        />
      ) : (
        ""
      )}
  LLLLLL*****Form-with-controller****LLLLLLLLLLLLL
      <div>
        <form
          onSubmit={form.onSubmit((values) =>
            console.log(JSON.stringify(values, null, 2))
          )}
        >
          <SimpleInput
            name="Name"
            label="Name"
            description="enter your Name"
            form={form}
          />
          <SimpleInput
            name="Email"
            label="Email"
            description="enter your Email"
            form={form}
          />
          <SimpleInput
            name="No"
            label="No.."
            description="enter your No"
            form={form}
          />
          <SimpleInput
            name="Age"
            label="Age"
            description="enter your Age"
            form={form}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default MultiSelectuse;
