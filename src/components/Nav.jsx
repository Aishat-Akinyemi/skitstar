import React from 'react';
import {Link as ReactRouterLink } from 'react-router-dom'
import { IconButton, Flex, Spacer , Box, Text, Link as ChakraLink} from '@chakra-ui/react'
import { Video, Notification,  } from 'iconsax-react';
import { ConnectWallet } from '@thirdweb-dev/react';

export const Nav = ({isCreator}) => {
  return (
    <Box mt="34px">
        <Flex>
            <Box>
              <IconButton
                  colorScheme='purple'
                  isRound = {true}
                  p={2}
                  icon={<Video color="#eee" variant="Bulk" size={32} /> }
              />
              <Text as="span" fontSize="18px" fontWeight="700" lineHeight="22px" fontFamily="Goldman" ml="8px">SkitStars</Text>
            </Box>
            <Spacer />
            <Box>
              <Flex alignItems="flex-start" gap="40px" w="377px" h="25px"
                    fontFamily="Open Sans" fontWeight="600" color="#333333"
              > 
                <ChakraLink as={ReactRouterLink} to="/home#about">Our Mission</ChakraLink>
                <Spacer/>  
                <ChakraLink as={ReactRouterLink} to="/home#faq">FAQ</ChakraLink>
                {!isCreator &&
                <>
                  <Spacer/>
                 <ChakraLink as={ReactRouterLink} to="/creator/join">Become a Creator</ChakraLink>
                </>
                }
              

              </Flex>
            </Box>
            <Spacer/>
            <Box>
              <IconButton
                  mr={4}
                  icon={<Notification size="32" color="#292D32" variant="Outline"/> }
              />
            <ConnectWallet theme="light" style={{backgroundColor:"#8247E5", borderRadius: "45px", padding: '16px 32px', color:'white'}}/>
          </Box>
        </Flex>
    </Box>
  )
}
