import React from 'react'
import { Button } from '@chakra-ui/react'

export const ActionButton = ({label}) => {
  return (
    <Button colorScheme='purple' borderRadius="44px" p="16px 32px">
        {label}
    </Button>
  )
}
