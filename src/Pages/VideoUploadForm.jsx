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

export const VideoUploadForm = () => {
    const Categories = ["Drama", "Satire", "Musical", "Parody", "Sketch"];
    const Visibility = ["NFT Collectors", "General"]
    const MAX_FILE_SIZE = 5000000;
    const MAX_THUMBNAIL_SIZE = 1000000;
  const ACCEPTED_IMAGE_TYPES = [
    "video/mp4",
  ];

    const videoUploadSchema = z.object({
        title: z.string().min(4, "Video Title should be at least 4 characters").max(20, 
            "Video title should be maximum 50 characters"),
        decription: z.string().optional(),
        videoFile: z
                    .any()
                    .refine((files) => files?.length === 1, "Video is required.")
                    .refine(
                    (files) => files?.[0]?.size <= MAX_FILE_SIZE,
                    `Max file size is 5MB.`
                    )
                    .refine(
                    (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
                    ".mp4 files are accepted."
                    ),
        thumbnail: z
        .any()
        .refine((files) => files?.length === 1, "Image is required.")
        .refine(
          (files) => files?.[0]?.size <= MAX_THUMBNAIL_SIZE,
          `Max file size is 1MB.`
        )
        .refine(
          (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
          ".jpg, .jpeg, .png and .webp files are accepted."
        ), 
        category: z.enum(Categories)
                    .refine((val) => Categories.includes(val), {message: "Please select one of the choices"}),
        visibility: z.enum(Visibility)
                    .refine((val) => Visibility.includes(val), "Selecting a visibility type is required"),
        promotion: z.boolean().optional(),            
    });
    const defaultValues = {
        promotion : false
    };

    const { ...methods } = useForm({
        resolver: zodResolver(videoUploadSchema),
        defaultValues
    });
   
    let videoFileError = methods.formState.errors["videoFile"]
    ? methods.formState.errors["videoFile"].message
    : "";

    const onSubmit = (values) => {
        console.log(values);
    };
    let thumbnailError = methods.formState.errors["thumbnail"]
    ? methods.formState.errors["thumbnail"].message
    : "";
  return (
    <Box>
        <Heading>Video Details</Heading>
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
                        ></input>
                        Upload Video File
                        </label>
                    </Center>
                    {videoFileError && (
                        <Text color="#d32f2f" pos="absolute" left="50px" bottom="10px">
                        {videoFileError}
                        </Text>
                    )}
                </Center>
                <FormInput name="title" required/>
                <FormInput name="description" isTextArea rows="4"/> 
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
                            {...methods.register("thumbnail")}
                            accept='image/*'
                        ></input>
                        Upload Thumbnail
                        </label>
                        </Center>
                        {thumbnailError && (
                            <Text color="#d32f2f" pos="absolute" left="50px" bottom="10px">
                            {thumbnailError}
                            </Text>
                        )}
                </Center>              
                <FormSelect name="category" options={Categories} />
                <FormSelect name="visibility" options={Visibility} />
                <FormCheckBox name="promotion" checkBoxLabel="My video contains paid promotion like a product or sponsporship" />
                <Center>   
                    <ActionButton label="Upload" type="submit" isLoading={methods.formState.isSubmitting}/>   
                </Center>
            </Box>
        </FormProvider>
    </Box>
  )
}
