import {React, useMemo} from 'react';
import {Box, Heading, Text, Center, HStack} from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {FormInput} from "../components/FormInput";
import {FormCheckBox} from "../components/FormCheckBox";
import {FormSelect} from "../components/FormSelect";
import { DocumentUpload } from 'iconsax-react';
import { ActionButton } from '../components/ActionButton';
import { useCreateAsset } from '@livepeer/react';
import { useStorage, useContractWrite, useAddress } from '@thirdweb-dev/react';
import { saveVideoAsset } from '../utils/SkitStarContract';

export const VideoUploadForm = ({contract, toaster}) => {
    const Categories = ["Drama", "Satire", "Musical", "Parody", "Sketch"];
    const Visibility = ["NFT Collectors", "General"]
    const MAX_FILE_SIZE = 50000000;
    const MAX_THUMBNAIL_SIZE = 1000000;
  const ACCEPTED_VIDEO_TYPES = [
    "video/mp4",
  ];
  const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp"
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
                    `Max file size is 50MB.`
                    )
                    .refine(
                    (files) => ACCEPTED_VIDEO_TYPES.includes(files?.[0]?.type),
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
    const address = useAddress();
    const {
      mutateAsync: createAsset,
      data: assets,
      progress,
      error,
      isError,
      isIdle,
      isLoading: isLoadingAsset,
      isSuccess,
      status
      
    
    } = useCreateAsset(        
      (methods.getValues("videoFile")?.[0])
        ? {
            sources: [
              { name:  methods.getValues("videoFile")?.[0]?.name, 
                file: methods.getValues("videoFile")?.[0],
                creatorId: address
              }],
          }
        : null
  );

  let thumbnailError = methods.formState.errors["thumbnail"]
    ? methods.formState.errors["thumbnail"].message
    : "";

  const progressFormatted = useMemo(
    () =>
      progress?.[0].phase === 'failed'
        ? 'Failed to process video.'
        : progress?.[0].phase === 'waiting'
        ? 'Video Waiting'
        : progress?.[0].phase === 'uploading'
        ? `Video Uploading: ${Math.round(progress?.[0]?.progress * 100)}%`
        : progress?.[0].phase === 'processing'
        ? `Video Processing: ${Math.round(progress?.[0].progress * 100)}%`
        : progress?.[0].phase === 'ready'
        ? `Video Successfully uploaded! Storage in Progress...`
        : null,
    [progress],
);

   const storage = useStorage(); 	
   const { mutateAsync: saveVideoAsset, isLoading } = useContractWrite(contract, "saveVideoAsset")	
	
    const onSubmit = async (values) => {
       try {
        const videoAssetId = (await createAsset?.())[0].id
        console.log(videoAssetId);       
          const thumbnailFi = methods.getValues("thumbnail")?.[0];
          const videoAssetUrl = await storage.upload({
              "thumbnailUrl": await storage.upload(thumbnailFi, {uploadWithoutDirectory: true}),
              "title": values.title,
              "description": values.description,
              "assetId": videoAssetId,
              "category": values.category,
              "visibility": values.visibility,
              "promotion": values.promotion
          }, {uploadWithoutDirectory: true}); 
          await saveVideoAsset({args: [videoAssetUrl]});
          toaster("Successfully uploaded video", "success");
          //TODO ADD NAV        
       } catch (error) {
        console.log(error);        
        toaster("Error Uploading Video", "error");
       }
    };
    
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
                            accept='video/*'
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
                    {
                      methods.formState.isSubmitting && <p>{progressFormatted}</p>
                    }   
                </Center>
            </Box>
        </FormProvider>
    </Box>
  )
}
