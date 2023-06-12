import { useFormContext, Controller } from "react-hook-form";
import {
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage, Input
} from "@chakra-ui/react";

import React from "react";

export const FormInput = ({ name, isTextArea, rows, type, label, ...otherProps }) => {
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
          {
            (type)
            ?
              <Input              
              h="45px"              
              variant="outline"
              id="name"
              type={type}
              {...field}
              {...otherProps}
              />
            :
              <Textarea
              height={isTextArea ? "" : "45px"}
              id="name"
              rows={rows ? rows : 1}
              resize="none"
              variant="outline"
              {...field}
              {...otherProps}
            />


          }
          <FormErrorMessage color="#d32f2f">
            {errors[name] && errors[name].message}
          </FormErrorMessage>
        </FormControl>
      )}
    />
  );
};
