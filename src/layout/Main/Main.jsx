import Form from "../../components/Form/Form";
import { useState } from "react";

const Main = () => {
  const [generalInformation, setGeneralInformation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    educationTitle: "",
    educationStartDate: "",
    educationEndDate: "",
    educationDescription: "",
    practicalTitle: "",
    practicalStartDate: "",
    practicalEndDate: "",
    practicalDescription: "",
  });

  const [submissions, setSubmissions] = useState({
    personalInformation: false,
    educationExperience: false,
    workExperience: false,
  });

  const [cv, setCv] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    educationalExperience: [],
    workExperience: [],
  });

  const generalInformationInputs = [
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      value: generalInformation.firstName,
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      value: generalInformation.lastName,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      value: generalInformation.email,
    },
    {
      id: "phone",
      label: "Phone",
      type: "tel",
      value: generalInformation.phone,
    },
  ];

  const practicalExperienceInputs = [
    {
      id: "practicalTitle",
      label: "Name of course",
      type: "text",
      value: generalInformation.practicalTitle,
    },
    {
      id: "practicalStartDate",
      label: "Start date",
      type: "date",
      value: generalInformation.practicalStartDate,
    },
    {
      id: "epracticalEndDate",
      label: "End date",
      type: "date",
      value: generalInformation.practicalEndDate,
    },
    {
      id: "practicalDescription",
      label: "Description",
      type: "textarea",
      value: generalInformation.practicalDescription,
    },
  ];

  const educationalExperienceInputs = [
    {
      id: "educationTitle",
      label: "Name of course",
      type: "text",
      value: generalInformation.educationTitle,
    },
    {
      id: "educationStartDate",
      label: "Start date",
      type: "date",
      value: generalInformation.educationStartDate,
    },
    {
      id: "eductationEndDate",
      label: "End date",
      type: "date",
      value: generalInformation.educationEndDate,
    },
    {
      id: "educationDescription",
      label: "Description",
      type: "textarea",
      value: generalInformation.educationDescription,
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setGeneralInformation((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event, formData) => {
    event.preventDefault();
    const { firstName, lastName, email, phone } = formData;
    setCv((previousData) => ({
      ...previousData,
      firstName,
      lastName,
      email,
      phone,
    }));
  };

  return (
    <main>
      <Form
        handleChange={handleChange}
        inputConfig={generalInformationInputs}
        handleSubmit={(event) => handleSubmit(event, generalInformation)}
      />
      <Form
        handleChange={handleChange}
        inputConfig={educationalExperienceInputs}
      />
      <Form
        handleChange={handleChange}
        inputConfig={practicalExperienceInputs}
      />
    </main>
  );
};

export default Main;
