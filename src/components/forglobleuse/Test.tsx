import { useForm, yupResolver } from "@mantine/form";
import { NumberInput, TextInput, Button } from "@mantine/core";
import { AppList } from "../AppList";
import * as Yup from "yup";
import { useState } from "react";

function Test() {
  const validateSchema = Yup.object().shape({
    primary: Yup.string().required("Primary is required"),
    secondary: Yup.string().when("primary", {
      is: (value: any) => value === "0",
      then: Yup.string().required("Must enter text"),
    }),
    name: Yup.string().required("Name is required"),

    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),

    age: Yup.number().positive().required("Age is required"),

    category: Yup.number()
      .required("value is required")
      .test(
        "is-valid-category",
        "Please select a valid value",
        function (value) {
          return value !== 0;
        }
      ),

    //   category: Yup.string()
    //     .test({
    //       name: "usename",
    //       test: function (value) {
    //         return this.resolve(Yup.ref("category")) === "1" ? !!value : "0";
    //       },
    //       message: "Requires a response",
    //     })
    //     .trim(),
  });

  // category: Yup.string()
  // .test("usename", "Requires a response", function (value) {
  //   return this.resolve(Yup.ref("category")) === "1" ? !!value : true;
  // })
  // .trim()

  const [valueCheck, setValueCheck] = useState();

  const form = useForm({
    initialValues: {
      primary: "",
      name: "",
      email: "",
      age: 0,
      secondary: "",
      category: "",
      usename: "",
    },
    validate: yupResolver(validateSchema),
  });

  form.watch("category", ({ value }: any) => {
    return setValueCheck(value);
  });

  console.log("ValueCheck", form.values);
  return (
    <form onSubmit={form.onSubmit(() => console.log("HHH", form.values))}>
      <AppList
        label="Primary question"
        clearable={false}
        allowDeselect={false}
        options={[
          { label: "No", value: "0" },
          { label: "Yes", value: "1" },
        ]}
        {...form.getInputProps("category")}
      />

      {valueCheck !== undefined ? (
        valueCheck === "0" ? (
          <TextInput
            mt="sm"
            label="username"
            placeholder="username"
            {...form.getInputProps("username")}
          />
        ) : (
          "Nothing 1"
        )
      ) : (
        ""
      )}

      {/* <AppList
        label="Primary question"
        clearable={false}
        allowDeselect={false}
        options={[
          { label: "No", value: "0" },
          { label: "Yes", value: "1" },
        ]}
        {...form.getInputProps("primary")}
      /> */}
      {/* {primaryValue === "0" && (
        <AppList
          label="secon question"
          clearable={false}
          allowDeselect={false}
          options={[
            { label: "No", value: "0" },
            { label: "Yes", value: "1" },
          ]}
          {...form.getInputProps("secondary")}
        />
      )} */}
      {/* <TextInput
        label="Name"
        placeholder="Name"
        {...form.getInputProps("name")}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        {...form.getInputProps("email")}
      /> */}
      {/* <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        {...form.getInputProps("age")}
      /> */}
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}

export default Test;
