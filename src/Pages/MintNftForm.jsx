import React from 'react';
import {Box, Heading, Text, Center, Input} from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {FormInput} from "../components/FormInput";
import {FormCheckBox} from "../components/FormCheckBox";
import { DocumentUpload } from 'iconsax-react';
import { ActionButton } from '../components/ActionButton';

export const MintNftForm = () => {
    const MAX_FILE_SIZE = 3000000;
    const ACCEPTED_IMAGE_TYPES = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp"
    ];
    const mintNftSchema = z.object({
        name: z.string().min(4, "Event name should be at least 4 characters").max(20, 
            "Event name should be maximum 20 characters"),
        image: z
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
        price: z.string(), 
        saleStatus:  z.boolean().optional(),            
    });

    const defaultValues = {
        saleStatus : true
    };

    const { ...methods } = useForm({
        resolver: zodResolver(mintNftSchema),
        defaultValues
    });
   
    let eventImageError = methods.formState.errors["eventImage"]
    ? methods.formState.errors["eventImage"].message
    : "";

    const onSubmit = (values) => {
        console.log(values);
    };

  return (
    <Box>
        <Heading>Mint NFTs</Heading>
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
                        {...methods.register("eventImage")}
                        accept='image/*'
                    ></input>
                    Upload File
                    </label>
                    </Center>
                    {eventImageError && (
                        <Text color="#d32f2f" pos="absolute" left="50px" bottom="10px">
                        {eventImageError}
                        </Text>
                    )}
                </Center>
                <FormInput name="name" required/>    
                <FormInput name="price" label="Price in SKTSTR" type="number" required />   
                <FormCheckBox name="saleStatus" label="Sale Status" checkBoxLabel="List Event For Sale" defaultChecked/>
                <Center> 
                    <ActionButton label="Create NFT Collection" type="submit" isLoading={methods.formState.isSubmitting}/>   
                </Center>
            </Box>
        </FormProvider>
    </Box>
  )
}
