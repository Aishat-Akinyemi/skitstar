import React from 'react'
import { Box, Image, Button, VStack, Avatar, HStack, Text, Flex, Spacer, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { ActionButton } from './ActionButton'
import { ArrowDown2 } from 'iconsax-react'

const CreatorInfo = ({data, isViewerPersonalInfo}) => {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Avatar size="xl" name={data.name} src={data.profileImage}></Avatar>
        <VStack gap={2} alignItems="flex-start">
            <Text fontFamily="Open Sans" fontWeight="700" fontSize="16px" lineHeight="22px"
                fontStyle="normal" h="24px" w="250px" textTransform="capitalize"
            >
                {data.name}
            </Text>              
            <Text fontFamily="Open Sans" fontWeight="600" fontSize="12px" lineHeight="16px"
                fontStyle="normal" color="#828282" textAlign="left"
            >
                {data.subscribers} Subscribers | {data.postCount} posts
            </Text>
        </VStack>
        <Spacer/>  
        {
            isViewerPersonalInfo 
            ?
                // <ActionButton label="Create" mr="24px"/>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ArrowDown2 size="32" color="#FF8A65"/>} colorScheme='purple' borderRadius="44px" p="16px 32px">Create</MenuButton>
                    <MenuList>
                        <MenuItem as='a' href='/'>Post a Video</MenuItem>
                        <MenuItem as='a' href='#'>Mint an NFT</MenuItem>
                        <MenuItem as='a' href='#'>Sell Event Tickets</MenuItem>
                        <MenuItem as='a' href='#'>Create Ads Voucher</MenuItem>
                    </MenuList>
                </Menu>
            :
            <>
                <ActionButton label="Tip" mr="24px"/>
                <ActionButton label="Subscribe" mr="24px"/>     
            </>
        }          
        
    </Flex>
  )
}

export default CreatorInfo
