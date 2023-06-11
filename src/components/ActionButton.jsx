import React from 'react'
import { Button } from '@chakra-ui/react'

export const ActionButton = ({label, ...otherProps}) => {
  return (
    <Button colorScheme='purple' borderRadius="44px" p="16px 32px" {...otherProps}>
        {label}
    </Button>
  )
}
