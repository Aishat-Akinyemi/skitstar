import React from 'react'
import { Button, useToast } from '@chakra-ui/react'
import { Web3Button } from "@thirdweb-dev/react";

export const ActionButton = ({label, successMessage, ErrorMessage, ...otherProps}) => {
  const toast = useToast();
  const showToast = (description) => {
        toast({
          description: "Success",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
  }
  return (
    <Button colorScheme='purple' borderRadius="44px" p="16px 32px" {...otherProps}>
        {label}
    </Button>
  )
}
