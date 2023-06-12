import React from 'react';
import {Box, Heading, Text, Center, Input} from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {FormInput} from "../components/FormInput";
import {FormCheckBox} from "../components/FormCheckBox";
import { DocumentUpload } from 'iconsax-react';
import { ActionButton } from '../components/ActionButton';

export const EventForm = () => {
    const MAX_FILE_SIZE = 3000000;
    const ACCEPTED_IMAGE_TYPES = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp"
    ];
    const eventRegSchema = z.object({
        name: z.string().min(4, "Event name should be at least 4 characters").max(20, 
            "Event name should be maximum 20 characters"),
        location: z.string().min(1, "Location is required"),
        eventImage: z
        .any()
        .optional()
        .refine(
          (files) => (files?.length < 1)? true: files?.[0]?.size <= MAX_FILE_SIZE,
          `Max file size is 3MB.`
        )
        .refine(
          (files) => (files?.length < 1) ? true : ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
          ".jpg, .jpeg, .png and .webp files are accepted."
        ),
        date: z.string().refine((val)=> new Date(val.toString()) > new Date(), "Event date must be in the future"),        
        description: z.string().optional(),
        price: z.string().min(1, "Price is required"),
        saleStatus:  z.boolean().optional(),            
    });

    const defaultValues = {
        saleStatus : true
    };

    const { ...methods } = useForm({
        resolver: zodResolver(eventRegSchema),
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
        <Heading>Event Details </Heading>
        <FormProvider {...methods}>
            <Box
                as="form"
                noValidate
                autoComplete="off"
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                <FormInput name="name" required/>
                <FormInput name="location" required />                
                <FormInput name="date" type="datetime-local" required/>
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

                <Heading mt="40px">Ticket Details </Heading>
                <FormInput name="description" isTextArea rows="4"/>  
                <FormInput name="price" label="Price in SKTSTR" type="number" required />   
                <FormCheckBox name="saleStatus" label="Sale Status" checkBoxLabel="List Event For Sale" defaultChecked/>
                <Center> 
                    <ActionButton label="Create Event Ticket" type="submit" isLoading={methods.formState.isSubmitting}/>   
                </Center>
            </Box>
        </FormProvider>
    </Box>
  )
}
