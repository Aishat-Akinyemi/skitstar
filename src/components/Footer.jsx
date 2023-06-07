import React from 'react';
import { Flex, Box, Link, Text, Center } from "@chakra-ui/react";

export const Footer = () => {
  return (
    
        
    <Box display = "flex" flexDirection="column" ml="calc(50% - 50vw)" w="100vw" background="#F2F2F2" p="94px" 
                    alignItems="center" justifyContent="center" gap="24px"
    >
        <Flex  alignItems="center" justifyContent="center" gap="12px" 
        >
            <Link colorScheme='purple' >About</Link>
            <Link textDecorationColor="purple">Careers</Link>
            <Link>FAQs</Link>
            <Link>Privacy</Link>
            <Link>Terms of Service</Link>                
        </Flex>
        <Center>
            <Text fontFamily="DM Mono" fontStyle="normal" fontWeight="300" fontSize="14px">Copyright © 2023 All rights reserved</Text>
        </Center>
    </Box>
  )
}
