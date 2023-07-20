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


export const MintNftForm = ({toaster, erc1155ContractAdd, marketPlaceContract}) => {
    //navigation
    const navigate = useNavigate();
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
        tokenImage: z
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
        amount : z.string(), 
        description: z.string().optional(),    
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
   
    let tokenImageError = methods.formState.errors["tokenImage"]
    ? methods.formState.errors["tokenImage"].message
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
            const file = methods.getValues("image")?.[0];            
            const tokenURI =  await storage.upload({ 
                "name":values.name,               
                "image": await storage.upload(file, {uploadWithoutDirectory: true}),
                "description": values.description,
                "type":"nft"
            }, {uploadWithoutDirectory: true});
            const tokenId = nextTokenId.toString();
            await mintNft({metadata: tokenURI, to: address, supply:parseInt(values.amount) });       
            
            toaster("Minted NFT", "success");
            
            if(values.saleStatus){
                await createDirectListing({
                    assetContractAddress: erc1155ContractAdd,
                    tokenId : tokenId,
                    pricePerToken: parseInt(values.price),
                    quantity: parseInt(values.amount)
                });  
                toaster("NFT Listed for sale", "success");              
            }
        } catch (error) {
            if(mintNftError){
                toaster(`Error minting NFT`, "error");                
            }
            if(isDirectListingError){
                toaster(`Error listing NFT for sale`, "error");
            }
            console.log(error.message)
        } finally{
            navigate("/profile")
        }
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
                        {...methods.register("tokenImage")}
                        accept='image/*'
                    ></input>
                    Upload File
                    </label>
                    </Center>
                    {tokenImageError && (
                        <Text color="#d32f2f" pos="absolute" left="50px" bottom="10px">
                        {tokenImageError}
                        </Text>
                    )}
                </Center>
                <FormInput name="name" required/>                
                <FormInput name="description" isTextArea rows="4"/>    
                <FormInput name="amount" label="Number of NFTs  to Mint" type="number" required />   
                <FormInput name="price" label="Price in FTM" type="number" required />   
                <FormCheckBox name="saleStatus" label="Sale Status" checkBoxLabel="List NFT For Sale" defaultChecked/>
                <Center> 
                    <ActionButton label="Create NFT Collection" type="submit" isLoading={methods.formState.isSubmitting}/>   
                </Center>
            </Box>
        </FormProvider>
    </Box>
  )
}
