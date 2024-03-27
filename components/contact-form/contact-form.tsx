"use client";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { ContactFormSchema } from "@/utils/formik-schema";
import React, { FC, useState } from "react";
import LinkButton from "../shared/link-button/link-button";
import { toast } from "react-hot-toast";

type ContactFormProps = {
  isComponent?: boolean;
};

const ContactForm: FC<ContactFormProps> = ({ isComponent }) => {
  const [loading, setLoading] = useState<boolean>(false);

  type FormValue = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  };

  const formFields = [
    {
      fieldType: "text",
      fieldName: "name",
      placeholder: "Full Name",
    },

    {
      fieldType: "text",
      fieldName: "email",
      placeholder: "Email Address",
    },
    {
      fieldType: "text",
      fieldName: "phone",
      placeholder: "Phone",
    },

    {
      fieldType: "text",
      fieldName: "subject",
      placeholder: "Subject",
    },

    {
      fieldType: "textarea",
      fieldName: "message",
      placeholder: "Your Message",
    },
  ];

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const onSubmit = async (
    values: FormValue,
    formikHelpers: FormikHelpers<FormValue>,
  ) => {
    setLoading(true);
    try {
      const emailTemplate = `<div>
          <p>You've got a new mail from ${values.name}, their email is: ${values.email}, their number is ${values?.phone} </p>
       
          ${values.message}</div>`;
      const res = await fetch("/api/contact", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
          htmlContent: emailTemplate,
        }),
      });
      const data = await res.json();
      if (data === 202) {
        toast.success("Email has been sent", {
          position: "top-right",
        });

        setTimeout(() => {
          formikHelpers.resetForm();
        }, 1000);
      } else {
        toast.error("Email has been sent", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={ContactFormSchema}
    >
      {({ errors, touched }) => (
        <>
          <div
            className={`${isComponent && "flex-1 lg:w-[40.94%] lg:flex-initial"}`}
          >
            {isComponent && (
              <h4 className="mb-[1.538rem] text-center font-righteous text-4xl leading-[3.461rem] text-indigo-blue md:mb-8 md:text-5xl md:leading-[4.5rem] lg:text-6xl">
                Get In Touch
              </h4>
            )}

            <Form>
              <div
                className={`gap-[0.673rem] md:gap-[1.057rem] ${isComponent ? "mb-[1.438rem] space-y-[0.673rem] md:mb-[1.875rem] md:space-y-3.5" : "mb-[1.438rem] grid grid-cols-1 sm:grid-cols-2 md:mb-8"}`}
              >
                {formFields?.map(({ fieldType, fieldName, placeholder }) => {
                  if (fieldType === "textarea") {
                    return (
                      <div key={fieldName} className="sm:col-span-2">
                        <Field
                          as="textarea"
                          name={fieldName}
                          className={` w-full resize-none rounded-[0.453rem] bg-white px-[0.961rem] py-[0.769rem]  font-medium text-indigo-blue placeholder-indigo-blue  focus:outline-indigo-blue md:px-6 md:py-[1.208rem]   ${isComponent ? "h-[6.875rem] text-[0.813rem] placeholder:text-[0.813rem] md:h-[9rem] md:text-base md:placeholder:text-base" : "h-[6.922rem] text-[0.813rem] placeholder:text-[0.813rem] md:h-[10.875rem] md:text-[1.208rem] md:placeholder:text-[1.208rem]"}`}
                          placeholder={placeholder}
                          rows={5}
                        />
                        {touched.message && errors.message && (
                          <p className="ml-2 mt-1.5 text-xs italic text-red-400">
                            {errors.message as string}
                          </p>
                        )}
                      </div>
                    );
                  }

                  return (
                    <div key={fieldName}>
                      <Field
                        name={fieldName}
                        className={`w-full rounded-[0.453rem] bg-white px-[0.961rem] font-medium text-indigo-blue placeholder-indigo-blue focus:outline-indigo-blue md:px-6   ${isComponent ? "h-[2.538rem] text-[0.813rem] placeholder:text-[0.813rem] md:h-[3.188rem] md:text-base md:placeholder:text-base" : "h-[2.538rem] text-[0.813rem] placeholder:text-[0.813rem] md:h-[3.853rem] md:text-[1.208rem] md:placeholder:text-[1.208rem]"} `}
                        placeholder={placeholder}
                      />

                      {touched[fieldName as keyof typeof touched] &&
                        errors[fieldName as keyof typeof touched] && (
                          <p className="ml-2 mt-1.5 text-xs italic text-red-400">
                            {
                              errors[
                                fieldName as keyof typeof touched
                              ] as string
                            }
                          </p>
                        )}
                    </div>
                  );
                })}
              </div>
              <div className="mx-auto flex items-center justify-center">
                <LinkButton
                  as={"button"}
                  loading={loading}
                  type="submit"
                  text={"Send Message"}
                  variant={`${isComponent ? "lg" : "lg-1"}`}
                  styles={`${isComponent && "!max-w-full"}`}
                />
              </div>
            </Form>
          </div>
        </>
      )}
    </Formik>
  );
};

export default ContactForm;
