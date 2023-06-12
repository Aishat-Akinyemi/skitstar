import { useFormContext, Controller } from "react-hook-form";
import {
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/react";

import React from "react";

export const FormSelect = ({ name, options, label, ...otherProps }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <FormControl isInvalid={errors[name]} w="742px" my="40px">
          <FormLabel
            htmlFor={name}
            fontFamily="Open Sans"
            fontSize="24px"
            fontWeight="600"
            textTransform="capitalize"
          >
           {label ? label : name}
          </FormLabel>
          <Select
            placeholder={`select ${name}`}
            height="45px"
            {...field}
            {...otherProps}
          >
            {options.map((option, id) => (
              <option key={id} value={option.toString()}>
                {option}
              </option>
            ))}
          </Select>
          <FormErrorMessage>
            {errors[name] && errors[name].message}
          </FormErrorMessage>
        </FormControl>
      )}
    />
  );
};
