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
import { useCreateAsset, useUpdateAsset } from '@livepeer/react';

export const VideoUploadForm = ({}) => {
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
    const {
        mutate: createAsset,
        data: assets,
        progress,
        error,
      } = useCreateAsset(        
        (methods.getValues("videoFile")?.[0])
          ? {
              sources: [{ name:  methods.getValues("videoFile")?.[0]?.name, file: methods.getValues("videoFile")?.[0] }],
            }
          : null
    );

    const uploadAsset = async () => {
        await createAsset?.();
        assets?.map((asset)=> {
            console.log(asset);
        })
    };
    const { mutate: updateAsset, status } = useUpdateAsset({
        // Here we are providing the assetId of the video
        assetId: assets?.[0].id,
        // And choose IPFS : true to make sure the video is uploaded to IPFS
        storage: { ipfs: true },
      });

    const progressFormatted = useMemo(
        () =>
          progress?.[0].phase === 'failed'
            ? 'Failed to process video.'
            : progress?.[0].phase === 'waiting'
            ? 'Waiting'
            : progress?.[0].phase === 'uploading'
            ? `Uploading: ${Math.round(progress?.[0]?.progress * 100)}%`
            : progress?.[0].phase === 'processing'
            ? `Processing: ${Math.round(progress?.[0].progress * 100)}%`
            : null,
        [progress],
    );

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
                {/* <FormInput name="title" required/>
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
                <FormCheckBox name="promotion" checkBoxLabel="My video contains paid promotion like a product or sponsporship" /> */}
                <p>{progressFormatted}</p>
      {assets?.map((asset) => (
        <div key={asset.id}>
          <div>
            <div>Asset Name: {asset?.name}</div>
            <div>Playback URL: {asset?.playbackUrl}</div>
            <div>IPFS CID: {asset?.storage?.ipfs?.cid ?? 'None'}</div>
          </div>
        </div>
      ))}
                <Center>   
                    <ActionButton label="get" type="" onClick={uploadAsset}/>   
                    <ActionButton label="upload to ipfs" type="" onClick={() => updateAsset?.()}/>   
                    {/* <ActionButton label="Upload" type="submit" isLoading={methods.formState.isSubmitting}/>    */}
                </Center>
            </Box>
        </FormProvider>
    </Box>
  )
}
