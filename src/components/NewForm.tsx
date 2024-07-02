import { useState } from "react";
import { useForm } from "@mantine/form";
import { AppList } from "./AppList";
// import * as Yup from "yup";
function NewForm() {
  const [formValues, setFormValues] = useState<any>();

  // const validationSchema = Yup.object().shape({
  //   primary: Yup.string().required('Select any value'),
  //   secondary: Yup.string().when('primary', {
  //     is: (val) => val === '0',
  //     then: Yup.string().required('Must enter text'),
  //     otherwise: Yup.string(), // Optional: Specify the schema when the condition is not met
  //   }),
  // });

  // validate: yupResolver(validationSchema),

  const form = useForm({
    mode: "controlled",
    initialValues: { primary: "", secondary: "" },
    validate: {
      primary : (value)=> (value.length < 0 ? "please select any value" : null),
    },
  });

  form.watch("primary", ({ value }) => {
    setFormValues(value);
    console.log("value", value);
  });

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    console.log(form.values);
  };

  return (
    <div>   
      <form onSubmit={handleSubmitForm}>
        <AppList
          label={<>Primary question thArrow</>}
          description=""
          clearable={false}
          allowDeselect={false}
          options={[
            { label: "No", value: "0" },
            { label: "Yes", value: "1" },
          ]}
          {...form.getInputProps("primary")}
        />
        {formValues !== undefined ? (
          formValues === 0 ? (
            <AppList
              label={<>Primary question thArrow</>}
              description=""
              clearable={false}
              allowDeselect={false}
              options={[
                { label: "No", value: "0" },
                { label: "Yes", value: "1" },
              ]}
              {...form.getInputProps("secondary")}
            />
          ) : (
            "Nothing 1"
          )
        ) : (
          ""
        )}
        <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default NewForm;
