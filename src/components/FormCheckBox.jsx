import { useFormContext, Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Checkbox
} from "@chakra-ui/react";

import React from "react";

export const FormCheckBox = ({ name, label, ...otherProps }) => {
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
        <FormControl as="fieldset" isInvalid={errors[name]} w="742px" my="40px">
          <FormLabel
            as="legend"
            htmlFor={name}
            fontFamily="Open Sans"
            fontSize="24px"
            fontWeight="600"
            textTransform="capitalize"
          >
            {name}
          </FormLabel>
          <Checkbox
            size="md"
            // error={!!errors[name]}
            {...field}
            {...otherProps}
          >
            {label}
          </Checkbox>
          <FormErrorMessage>
            {errors[name] && errors[name].message}
          </FormErrorMessage>
        </FormControl>
      )}
    />
  );
};
