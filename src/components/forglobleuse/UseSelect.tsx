import { useForm } from "@mantine/form";
import React from "react";
import Datepicker from "./Datepicker";
import DateRangePicker from "./DateRangePicker";
import MultiSelectInput from "./MultiSelectInput";
import SelectInput from "./SelectInput";
import TextArea from "./TextArea";

function UseSelect() {
  // For multiselect value input :)-------------------------------
  // const form = useForm({
  //   initialValues: {
  //     username: "",
  //     email: "",
  //     mobile: "",
  //     fullName: "",
  //     country: "",
  //   },
  // });

  // For single select value input :)------------------------------------
  // const form = useForm({
  //   initialValues: {
  //     username: [],
  //     email: [],
  //     mobile: [],
  //     fullName: [],
  //     country: [],
  //   },
  // });

  // Date  picker :)-----------------------------------------------------
  // const form = useForm({
  //   initialValues: {
  //     date: new Date(),
  //     stateDate: new Date(),
  //     endDate: new Date(),
  //   },
  // });

  //DateRangePicker :)-------------------------------------------
  // const form = useForm({
  //   initialValues: {
  //     dates: [],
  //     newDates : []
  //   },
  // });

  //for all input use -------------------------------- :)
  const form = useForm({
    initialValues: {
      usernameselect: "",
      username: [],
      testArea: "",
      date: new Date(),
      dates: [],

    },
    validate : {
      testArea : (value)=>(value.length < 2? "plese add more text" : null)
    }
  });
  const data = [
    { value: "1", label: "React library1" },
    { value: "2", label: "React library2" },
    { value: "3", label: "React library3" },
    { value: "4", label: "React library4" },
    { value: "5", label: "React library5" },
    { value: "6", label: "React library6" },
    { value: "7", label: "React library7" },
    { value: "8", label: "React library8" },
  ];

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    console.log(form.values);
  };

  return (
    <div className="App" style={{border : "2px solid green"}}>
      {/* For multiselect value input---------------------------------------- */}
      {/* <form onSubmit={handleSubmitForm}>
        <MultiSelectInput
          lable="choose any username from it"
          name="username"
          data={data}
          form={form}
        />
        <MultiSelectInput
          lable="choose any Email from it"
          name="email"
          data={data}
          form={form}

        />
        <MultiSelectInput
          lable="choose any Mobile from it"
          name="mobile"
          data={data}
          form={form}

        />
        <MultiSelectInput
          lable="choose any Country from it"
          name="country"
          data={data}
          form={form}

        />
        <button type="submit">Submit</button>
      </form> */}

      {/* For single select value input--------------------------------------- */}
      {/* <form
    
    >
      <SelectInput
        name="username"
        label="sELECT OPTION"
        description="SELECT ANY VALUE"
        data={data}
        form={form}
      />
      <SelectInput
        name="email"
        label="sELECT OPTION"
        description="SELECT ANY VALUE"
        data={data}
        form={form}
      />
      <SelectInput
        name="phone"
        label="sELECT OPTION"
        description="SELECT ANY VALUE"
        data={data}
        form={form}
      />
      <SelectInput
        name="country"
        label="sELECT OPTION"
        description="SELECT ANY VALUE"
        data={data}
        form={form}
      />
      <SelectInput
        name="fullName"
        label="sELECT OPTION"
        description="SELECT ANY VALUE"
        data={data}
        form={form}
      />
      <button onClick={handleSubmitForm}>Submit</button>
    </form> */}

      {/* Date  picker-------------------------------------------------------- */}
      {/* <form onSubmit={handleSubmitForm}>
        <Datepicker name="date" form={form} label="Choose Date" />
        <Datepicker name="stateDate" form={form} label="Choose Date" />
        <Datepicker name="endDate" form={form} label="Choose Date" />

        <button type="submit">Submit</button>
      </form> */}

      {/* DateRangePicker----------------------------------------------------- */}
      {/* <form onSubmit={handleSubmitForm} >
        <DateRangePicker name="dates" form={form} label="Dates" />
        <DateRangePicker name="newDates" form={form} label="Dates" />

        <button type="submit">Submit</button>
      </form> */}

      {/* for TextArea input ------------------------------------------------- */}
      {/* <form onSubmit={handleSubmitForm}>
        <TextArea
          description="Text area .........."
          name="testArea"
          form={form}
          lable="Second-AREA"
        />
         <TextArea
          description="3rd area .........."
          name="testArea2"
          form={form}
          lable="3rd-AREA"
        />
         <TextArea
          description="4rth area .........."
          name="testArea3"
          form={form}
          lable="4rth-AREA"
        />
        <button type="submit">Submit</button>
      </form> */}

      {/* All inputs use  ---------- */}
      <form onSubmit={handleSubmitForm}>
        <MultiSelectInput
          lable="choose any username from it"
          name="username"
          data={data}
          form={form}
        />
        <DateRangePicker name="dates" form={form} label="Dates" />

        <SelectInput
          name="usernameselect"
          label="sELECT OPTION"
          description="SELECT ANY VALUE"
          data={data}
          form={form}
        />
        <Datepicker name="date" form={form} label="Choose Date" />
        <TextArea
          description="Text area .........."
          name="testArea"
          form={form}
          lable="Second-AREA"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UseSelect;
