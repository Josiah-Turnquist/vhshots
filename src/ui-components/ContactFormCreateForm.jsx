/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { ContactForm } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ContactFormCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Subject, setSubject] = React.useState(initialValues.Subject);
  const [Message, setMessage] = React.useState(initialValues.Message);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.Name);
    setEmail(initialValues.Email);
    setSubject(initialValues.Subject);
    setMessage(initialValues.Message);
    setErrors({});
  };
  const validations = {
    Name: [{ type: "Required" }],
    Email: [{ type: "Required" }, { type: "Email" }],
    Subject: [],
    Message: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="20px"
      columnGap="15px"
      padding="15px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Name,
          Email,
          Subject,
          Message,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new ContactForm(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ContactFormCreateForm")}
      {...rest}
    >
      <TextField
        label=" "
        isRequired={true}
        isReadOnly={false}
        placeholder="Full Name"
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              Email,
              Subject,
              Message,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        marginTop="-5px"
        label=" "
        isRequired={true}
        isReadOnly={false}
        placeholder="Email"
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email: value,
              Subject,
              Message,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        marginTop="-5px"
        label=" "
        isRequired={false}
        isReadOnly={false}
        placeholder="How did you hear about us?"
        value={Subject}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              Subject: value,
              Message,
            };
            const result = onChange(modelFields);
            value = result?.Subject ?? value;
          }
          if (errors.Subject?.hasError) {
            runValidationTasks("Subject", value);
          }
          setSubject(value);
        }}
        onBlur={() => runValidationTasks("Subject", Subject)}
        errorMessage={errors.Subject?.errorMessage}
        hasError={errors.Subject?.hasError}
        {...getOverrideProps(overrides, "Subject")}
      ></TextField>
      <TextField
        marginTop="-5px"
        label=" "
        descriptiveText=""
        isRequired={false}
        isReadOnly={false}
        padding="0px"
        placeholder="Where do you want to shoot?"
        value={Message}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Email,
              Subject,
              Message: value,
            };
            const result = onChange(modelFields);
            value = result?.Message ?? value;
          }
          if (errors.Message?.hasError) {
            runValidationTasks("Message", value);
          }
          setMessage(value);
        }}
        onBlur={() => runValidationTasks("Message", Message)}
        errorMessage={errors.Message?.errorMessage}
        hasError={errors.Message?.hasError}
        {...getOverrideProps(overrides, "Message")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="SUBMIT"
            width="70vw"
            type="submit"
            variation="primary"
            marginTop="12px"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
