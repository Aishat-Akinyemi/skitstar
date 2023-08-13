import React from 'react';

import {Link as ReactRouterLink } from 'react-router-dom'
import { Flex, Box, Link as ChakraLink, Text, Center } from "@chakra-ui/react";

export const Footer = () => {
  return (
    
        
    <Box display = "flex" flexDirection="column" ml="calc(50% - 50vw)" w="100vw" background="#F2F2F2" p="94px" 
                    alignItems="center" justifyContent="center" gap="24px"
    >
        <Flex  alignItems="center" justifyContent="center" gap="12px" 
        >
            <ChakraLink as={ReactRouterLink} to="/home#about" colorScheme='purple' >About</ChakraLink>
            <ChakraLink textDecorationColor="purple">Careers</ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/home#faq" >FAQs</ChakraLink>
            <ChakraLink>Privacy</ChakraLink>
            <ChakraLink>Terms of Service</ChakraLink>                
        </Flex>
        <Center>
            <Text fontFamily="DM Mono" fontStyle="normal" fontWeight="300" fontSize="14px">Copyright © 2023 All rights reserved</Text>
        </Center>
    </Box>
  )
}
