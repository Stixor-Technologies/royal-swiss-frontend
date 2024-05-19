import * as Yup from "yup";

export const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please enter your name")
    .min(3, "Name should be atleast 3 characters long.")
    .max(20, "Name should be at most 30 characters long.")
    .matches(/^[A-Za-z\s]+$/, "Only characters are allowed")
    .matches(
      /^[^\s]+(?:$|.*[^\s]+$)/,
      "First name cannot start/end with space",
    ),

  email: Yup.string()
    .matches(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i, "Invalid email address")
    .required("Please enter your email address"),

  phone: Yup.string()
    .required("Please enter your phone number")
    .matches(/^(\+92|0|92)[0-9]{10}$/, "Phone number is not valid"),

  subject: Yup.string()
    .required("Please enter subject")
    .min(3, "Subject should be atleast 3 characters long.")
    .max(50, "Subject should be at most 50 characters long.")
    .matches(/^[^\s]+(?:\s[^\s]+)*$/, "Subject cannot start/end with space"),

  message: Yup.string()
    .required("Please enter your message")
    .min(10, "Message should be atleast 10 characters long.")
    .max(500, "Message should be at most 500 characters long."),
});
