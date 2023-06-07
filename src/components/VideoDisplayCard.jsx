import { Box, Card, CardBody, CardFooter, HStack, Text, Image, VStack, Avatar } from '@chakra-ui/react'
import React from 'react'
import PressPlayBro from "../assets/PressPlayBro.svg"


export const VideoDisplayCard = ({src, title, creatorAvatar, creatorName, views, datePosted}) => {
    let temp = {src :"https://media.licdn.com/dms/image/C4D03AQEYfSMJT3aPAA/profile-displayphoto-shrink_800_800/0/1656793439753?e=2147483647&v=beta&t=xBxxtaFX6MLF0gXAW4OcOlwhJHvQpbrKHNGp7qs-cMU", 
    title:"TGIF Comedy series | A special Friday show ", creatorAvatar: "https://media.licdn.com/dms/image/C4D03AQEYfSMJT3aPAA/profile-displayphoto-shrink_800_800/0/1656793439753?e=2147483647&v=beta&t=xBxxtaFX6MLF0gXAW4OcOlwhJHvQpbrKHNGp7qs-cMU", 
    creatorName:"The Good Laugh Zone", views:"20M", datePosted:"2/2/2023"}
    return (
    <Box display="flex" 
         flexDirection="column" 
         alignItems="flex-start" 
         gap="16px"
         w="360px"
         h="340px"
    >
        <Image 
                src={PressPlayBro} alt="" 
                borderRadius="10px"
                w="360px"
                h="232px" 

        />
        <HStack gap="16px">
            <Avatar size="md" name={temp.creatorName} src={temp.src}></Avatar>
            <VStack gap="16px">
                <Text fontFamily="Open Sans" fontWeight="700" fontSize="16px" lineHeight="22px"
                    fontStyle="normal" h="24px" w="250px"
                >
                    {temp.title}
                </Text>
                <Text fontFamily="Open Sans" fontWeight="600" fontSize="12px" lineHeight="16px"
                    fontStyle="normal" color="#828282" mt="8px" textAlign="left"
                >
                    {temp.creatorName}
                </Text>
                <Text fontFamily="Open Sans" fontWeight="600" fontSize="12px" lineHeight="16px"
                    fontStyle="normal" color="#828282" textAlign="left"
                >
                    {temp.views} views | Posted {new Date(temp.datePosted).toDateString()}
                </Text>
            </VStack>
        </HStack>

        
    </Box>
  )
}
