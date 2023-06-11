import React from 'react';
import {Box, Heading, Text, Center, HStack} from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {FormInput} from "../components/FormInput";
import {FormCheckBox} from "../components/FormCheckBox";
import {FormSelect} from "../components/FormSelect";
import { DocumentUpload } from 'iconsax-react';
import { ActionButton } from '../components/ActionButton';

export const CreatorRegistration = () => {
    const Categories = ["Drama", "Satire", "Musical", "Parody", "Sketch"]
    const MAX_FILE_SIZE = 3000000;
  const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp"
  ];
    const registrationSchema = z.object({
        name: z.string().min(4, "Brand name should be at least 4 characters").max(20, 
            "Brand name should be maximum 20 characters"),
        email: z.string().min(1, "Email is required").email("Email is invalid"),
        about: z.string().optional(),
        profileImage: z
        .any()
        .refine((files) => files?.length === 1, "Image is required.")
        .refine(
          (files) => files?.[0]?.size <= MAX_FILE_SIZE,
          `Max file size is 3MB.`
        )
        .refine(
          (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
          ".jpg, .jpeg, .png and .webp files are accepted."
        ),
        category: z.enum(Categories)
                    .refine((val) => Categories.includes(val), "Category is required"),
        instagramUrl: z.string().url("must be a valid url"),
        twitterUrl: z.string().url("must be a valid url")
    });

    const { ...methods } = useForm({
        resolver: zodResolver(registrationSchema)
    });
   
    let profileImageError = methods.formState.errors["profileImage"]
    ? methods.formState.errors["profileImage"].message
    : "";

    const onSubmit = (values) => {
        console.log(values);
    };

  return (
    <Box>
        <Heading>Register as A Creator</Heading>
        <FormProvider {...methods}>
            <Box
                as="form"
                noValidate
                autoComplete="off"
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                <FormInput name="name" required/>
                <FormInput name="email" required />
                <FormInput name="about" isTextArea rows="4" required></FormInput>
                <Center
                    w="750px"
                    h="433px"
                    borderRadius="20px"
                    background="#ECE8FF"
                    pos="relative"
                    >
                    <Center
                        flexDirection="column"
                        borderRadius="20px"
                        background="white"
                        w="670px"
                        h="353px"
                    >
                        <DocumentUpload size="32" color="#8247E5"/>
                        <label
                        style={{
                            borderRadius: "45px",
                            border: "1px solid #8247E5",
                            padding: "14px 32px",
                            color: "#8247E5",
                            marginTop: "16px"
                        }}
                        >
                        <input
                            type="file"
                            style={{ display: "none" }}
                            {...methods.register("profileImage")}
                            accept='image/*'
                        ></input>
                        Upload File
                        </label>
                    </Center>
                    {profileImageError && (
                        <Text color="#d32f2f" pos="absolute" left="50px" bottom="10px">
                        {profileImageError}
                        </Text>
                    )}
                </Center>
                <FormSelect name="category" options={Categories} />
                <FormInput name="instagramUrl" required />
                <FormInput name="twitterUrl" required />
                <Center gap={5}> 
                    <ActionButton label="Cancel Registration" colorScheme="gray" />   
                    <ActionButton label="Complete Registration" type="submit" isLoading={methods.formState.isSubmitting}/>   
                </Center>
            </Box>
        </FormProvider>
    </Box>
  )
}
