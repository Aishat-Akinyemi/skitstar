import React from 'react';
import {Box, Heading, Text, Center, Input} from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {FormInput} from "../components/FormInput";
import {FormCheckBox} from "../components/FormCheckBox";
import { DocumentUpload } from 'iconsax-react';
import { ActionButton } from '../components/ActionButton';
import { useStorage, useContract, useAddress,  useContractRead, useMintNFT, useCreateDirectListing} from '@thirdweb-dev/react';
import { useNavigate } from 'react-router-dom';
import { erc1155_abi } from '../utils/abi';

export const EventForm = ({toaster, erc1155ContractAdd, marketPlaceContract}) => {
     //navigation
     const navigate = useNavigate();
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
        amount : z.string(),
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

    const address = useAddress();
    const storage = useStorage();
    const { contract } = useContract(
        erc1155ContractAdd, erc1155_abi
    );
  const { data : nextTokenId } = useContractRead(contract, "nextTokenIdToMint");

    const {
        mutateAsync: mintNft,
        error:   mintNftError,
      } = useMintNFT(contract);
    const {
    mutateAsync: createDirectListing,
    error: isDirectListingError,
    } = useCreateDirectListing(marketPlaceContract);
    const onSubmit = async(values) => {
        try {
            const file = methods.getValues("eventImage")?.[0];            
            const tokenURI =  await storage.upload({ 
                "name":values.name,               
                "image": await storage.upload(file, {uploadWithoutDirectory: true}),
                "description": values.description,
                "location"   : values.location,
                "date" : values.date,
                "type":"event"
            }, {uploadWithoutDirectory: true});
            const tokenId = nextTokenId.toString();
            await mintNft({metadata: tokenURI, to: address, supply:parseInt(values.amount) });       
            
            toaster("Event Ticket Created", "success");
            
            if(values.saleStatus){
                await createDirectListing({
                    assetContractAddress: erc1155ContractAdd,
                    tokenId : tokenId,
                    pricePerToken: parseInt(values.price),
                    quantity: parseInt(values.amount)
                });  
                toaster("Tickets Listed for sale", "success");              
            }
        } catch (error) {
            if(mintNftError){
                toaster(`Error Creating Tickets`, "error");                
            }
            if(isDirectListingError){
                toaster(`Error listing Tickets for sale`, "error");
            }
            console.log(error.message)
        } finally{
            navigate("/profile")
        }
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
                <FormInput name="amount" label="Number of Event Tickets" type="number" required />   
                <FormInput name="price" label="Price in FTM" type="number" required />   
                <FormCheckBox name="saleStatus" label="Sale Status" checkBoxLabel="List Event For Sale" defaultChecked/>
                <Center> 
                    <ActionButton label="Create Event Ticket" type="submit" isLoading={methods.formState.isSubmitting}/>   
                </Center>
            </Box>
        </FormProvider>
    </Box>
  )
}
