import React from 'react';
import {Box, Heading, Text, Center, HStack} from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {FormInput} from "../components/FormInput";
import { DocumentUpload } from 'iconsax-react';
import { ActionButton } from '../components/ActionButton';

export const BuyAdsVoucherForm = () => {
    const MAX_FILE_SIZE = 5000000;
    const ACCEPTED_FILE_TYPES = [
    "video/mp4", "image/jpeg", "image/jpg", "image/png", "image/webp"
  ];
    const buyAdsSchema = z.object({
        title: z.string().min(4, "File Title should be at least 4 characters").max(20, 
            "File title should be maximum 50 characters"),
        decription: z.string().optional(),
        adsFile: z
                    .any()
                    .refine((files) => files?.length === 1, "File is required.")
                    .refine(
                    (files) => files?.[0]?.size <= MAX_FILE_SIZE,
                    `Max file size is 5MB.`
                    )
                    .refine(
                    (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
                    ".mp4, .jpeg, .jpg, .png, .webp files are accepted."
                    )            
    });

    const { ...methods } = useForm({
        resolver: zodResolver(buyAdsSchema)
    });
   
    let adsFileError = methods.formState.errors["adsFile"]
    ? methods.formState.errors["adsFile"].message
    : "";

    const onSubmit = (values) => {
        console.log(values);
    };

  return (
    <Box>
        <Heading mb="40px">Ads Details</Heading>
        <FormProvider {...methods}>
            <Box
                as="form"
                noValidate
                autoComplete="off"
                onSubmit={methods.handleSubmit(onSubmit)}
            >
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
                            {...methods.register("videoFile")}
                            accept='video/*|image/*'
                        ></input>
                        Upload Ads File
                        </label>
                    </Center>
                    {adsFileError && (
                        <Text color="#d32f2f" pos="absolute" left="50px" bottom="10px">
                        {adsFileError}
                        </Text>
                    )}
                </Center>
                <FormInput name="title" required/>
                <FormInput name="description" isTextArea rows="4"></FormInput>               
                <Center>   
                    <ActionButton label="Upload" type="submit" isLoading={methods.formState.isSubmitting}/>   
                </Center>
            </Box>
        </FormProvider>
    </Box>
  )
}
