import React from 'react';
import { IconButton, Flex, Spacer , Box, Text} from '@chakra-ui/react'
import { Video, Notification,  } from 'iconsax-react';
import { ConnectWallet } from '@thirdweb-dev/react';



export const Nav = () => {
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
               
                <Box>Our Mission</Box>
                <Box>FAQ</Box>
                <Box>Become a Creator</Box>
              
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
