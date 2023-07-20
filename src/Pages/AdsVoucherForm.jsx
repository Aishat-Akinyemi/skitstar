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

export const AdsVoucherForm = ({toaster, erc1155ContractAdd, marketPlaceContract}) => {
     //navigation
     const navigate = useNavigate();
    const createAdsVoucherSchema = z.object({
        name: z.string().min(4, "Event name should be at least 4 characters").max(20, 
            "Event name should be maximum 20 characters"),
        price: z.string().min(1, "Price is required"),
        description: z.string().optional(),
        amount : z.string(),
        saleStatus:  z.boolean().optional(),    
    });

    const defaultValues = {
        saleStatus : true
    };

    const { ...methods } = useForm({
        resolver: zodResolver(createAdsVoucherSchema),
        defaultValues
    });
   
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
                 console.log("here")      
            const tokenURI =  await storage.upload({ 
                "name":values.name,               
                "description": values.description,
                "type":"ads"
            }, {uploadWithoutDirectory: true});
            const tokenId = nextTokenId.toString();
            await mintNft({metadata: tokenURI, to: address, supply:parseInt(values.amount) });       
            
            toaster("Ads Voucher Created", "success");
            
            if(values.saleStatus){
                await createDirectListing({
                    assetContractAddress: erc1155ContractAdd,
                    tokenId : tokenId,
                    pricePerToken: parseInt(values.price),
                    quantity: parseInt(values.amount)
                });  
                toaster("Ads Voucher Listed for sale", "success");              
            }
        } catch (error) {
            if(mintNftError){
                toaster(`Error Creating Ads Voucher ${error.message}`, "error");                
            }
            if(isDirectListingError){
                toaster(`Error listing Ads Voucher for sale ${error.message}`, "error");
            }
            console.log(error.message)
        } finally{
            navigate("/profile");
        }
    };

  return (
    <Box>
        <Heading>Create Ads Voucher</Heading>
        <FormProvider {...methods}>
            <Box
                as="form"
                noValidate
                autoComplete="off"
                onSubmit={methods.handleSubmit(onSubmit)}
            >    
                <FormInput name="name" required/>    
                <FormInput name="description" isTextArea rows="4"/>  
                
                <FormInput name="amount" label="Amount of Ads Voucher to Create" type="number" required />
                <FormInput name="price" label="Price in FTM" type="number" required />   
                <FormCheckBox name="saleStatus" label="Sale Status" checkBoxLabel="List Event For Sale" defaultChecked/>
                <Center> 
                    <ActionButton label="Create Ads Vouchers" type="submit" isLoading={methods.formState.isSubmitting}/>   
                </Center>
            </Box>
        </FormProvider>
    </Box>
  )
}
