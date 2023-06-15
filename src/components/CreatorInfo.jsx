import React from 'react'
import { Box, Image, VStack, Avatar, HStack, Text, Flex, Spacer,  } from '@chakra-ui/react'
import { ActionButton } from './ActionButton'
const CreatorInfo = () => {
    let temp = {profileImage: "https://media.licdn.com/dms/image/C4D03AQEYfSMJT3aPAA/profile-displayphoto-shrink_800_800/0/1656793439753?e=2147483647&v=beta&t=xBxxtaFX6MLF0gXAW4OcOlwhJHvQpbrKHNGp7qs-cMU",
            name: "The goood laugh zone",
            subscribers: 200000,
            postCount: 200,
            address: '',
            about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam perspiciatis quas quisquam eaque repellat? Ipsa pariatur illum odit adipisci molestias similique omnis, quo fugit repellat aspernatur ex earum. Vitae, iste.'
    }
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Avatar size="xl" name={temp.name} src={temp.profileImage}></Avatar>
        <VStack gap={2} alignItems="flex-start">
            <Text fontFamily="Open Sans" fontWeight="700" fontSize="16px" lineHeight="22px"
                fontStyle="normal" h="24px" w="250px" textTransform="capitalize"
            >
                {temp.name}
            </Text>              
            <Text fontFamily="Open Sans" fontWeight="600" fontSize="12px" lineHeight="16px"
                fontStyle="normal" color="#828282" textAlign="left"
            >
                {temp.subscribers} Subscribers | {temp.postCount} posts
            </Text>
        </VStack>
        <Spacer/>            
        <ActionButton label="Tip" mr="24px"/>
        <ActionButton label="Subscribe" mr="24px"/>
    </Flex>
  )
}

export default CreatorInfo
