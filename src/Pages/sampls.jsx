import React from 'react';
import {Box, Heading, Text, Center, HStack} from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {FormInput} from "../components/FormInput";
import {FormSelect} from "../components/FormSelect";
import { DocumentUpload } from 'iconsax-react';
import { ActionButton } from '../components/ActionButton';
import { useStorageUpload, useStorage } from '@thirdweb-dev/react';

export const CreatorRegistration = () => {
    //form definition and validation
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
        email: z.string().min(1, "Email is required for communication with people who want to place ads through you").email("Email is invalid"),
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
        instagramUrl: z.string().optional(),
        twitterUrl: z.string().optional()
    });

    const { ...methods } = useForm({
        mode: "onBlur",
        resolver: zodResolver(registrationSchema)
    });
   
    let profileImageError = methods.formState.errors["profileImage"]
    ? methods.formState.errors["profileImage"].message
    : "";

    //handle actions
    const { mutateAsync: upload, isLoading : isFileUploading } = useStorageUpload({ uploadWithoutDirectory: true, onProgress: (progress) => {
        console.log(progress);//{progress: 100, total: 100}
      },});
    const storage = useStorage();

    async function uploadData() {
        try {
            if (methods.getValues("profileImage")?.[0]) {
                const file = methods.getValues("profileImage")?.[0];
                const uris = await upload({ data: [file] });
              
                console.log(uris); 
                //['ipfs://QmcBxrMiSTqqouzHUQdiJ7t3dPsX8ybJPpuMdGaMNhUDav'] 
                return uris    
                      
            } else return ""
            
        } catch (error) {
            console.log(error)
        }
       
       } 
    
       async function ppp() {
        // const obj = {
        //     "test": "test"
        // }
        // const uris = await upload({ data: [obj] });
        // const url = storage.resolveScheme(uris[0]);
        // console.log(url);
        const json = await storage.downloadJSON("ipfs://QmbbYjPB5tZF3izXADwguEvJQ3c9wdFRGWnc4PhhTev4Fe");
       console.log(json)
        //['ipfs://QmbbYjPB5tZF3izXADwguEvJQ3c9wdFRGWnc4PhhTev4Fe']
    //   console.log( await storage?.download("QmbbYjPB5tZF3izXADwguEvJQ3c9wdFRGWnc4PhhTev4Fe")); // Download a file from IPFS
//   storage?.upload(); // Upload a file to IPFS
      
        // console.log(uris); 

       }

    const onSubmit = async (values) => {
        await uploadData();
        let dataObject = {

        }
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
                <FormInput name="email" type="email" required />
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
                <FormInput name="instagramUrl" label="Instagram Profile Link" required />
                <FormInput name="twitterUrl" label="Twitter Profile Link" required />
                <Center gap={5}> 
                    <ActionButton label="Cancel Registration" colorScheme="gray"   onClick={ppp}/>                     
                    <ActionButton label="Complete Registration" type="submit" isLoading={methods.formState.isSubmitting && isFileUploading}/>   
                </Center>
            </Box>
        </FormProvider>
    </Box>
  )
}
