import React from 'react';
import {Box, Heading, Text, Center, Input} from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {FormInput} from "../components/FormInput";
import {FormCheckBox} from "../components/FormCheckBox";
import { DocumentUpload } from 'iconsax-react';
import { ActionButton } from '../components/ActionButton';

export const AdsVoucherForm = () => {
    const createAdsVoucherSchema = z.object({
        name: z.string().min(4, "Event name should be at least 4 characters").max(20, 
            "Event name should be maximum 20 characters"),description: z.string().optional(),
        price: z.string().min(1, "Price is required"),
        saleStatus:  z.boolean().optional(),    
    });

    const defaultValues = {
        saleStatus : true
    };

    const { ...methods } = useForm({
        resolver: zodResolver(createAdsVoucherSchema),
        defaultValues
    });
   
    const onSubmit = (values) => {
        console.log(values);
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
                <FormInput name="price" label="Price in SKTSTR" type="number" required />   
                <FormCheckBox name="saleStatus" label="Sale Status" checkBoxLabel="List Event For Sale" defaultChecked/>
                <Center> 
                    <ActionButton label="Create Ads Vouchers" type="submit" isLoading={methods.formState.isSubmitting}/>   
                </Center>
            </Box>
        </FormProvider>
    </Box>
  )
}
