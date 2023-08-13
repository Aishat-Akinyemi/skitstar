import React from 'react'
import {Link as ReactRouterLink } from 'react-router-dom'

import { Home2, Element4, VideoTime, Setting2, MessageQuestion,  Profile  } from 'iconsax-react';
import { List, Icon, Menu, MenuButton, MenuList, MenuItem, Box, Link as ChakraLink} from '@chakra-ui/react';
export const SideBar = ({isCreator}) => {
  return (
      <Box minWidth="218px" display="flex" flexDirection="column" gap="24px" mr="24px" mt="32px">
        <Menu spacing={6}  color="#626262">
          <ChakraLink as={ReactRouterLink} to='/'>
            <MenuItem>
              <Icon as={Home2} color='brand.900' width="24px" height="24px" mr="16px"/>
              Home
            </MenuItem>
          </ChakraLink>
          
          {
            isCreator ?
            <ChakraLink as={ReactRouterLink} to='/profile'>
              <MenuItem>
                  <Icon as={Profile} color='brand.900' width="24px" height="24px" mr="16px"/>
                  Profile
              </MenuItem>
            </ChakraLink>
            :
            <ChakraLink as={ReactRouterLink} to='/creator/join'>
              <MenuItem>
                <Icon as={Profile} color='brand.900' width="24px" height="24px" mr="16px"/>
                Join As Creator
              </MenuItem>
            </ChakraLink>          

          }
          
          
          {/* <MenuItem>
            <Icon size="32px" as={Element4} color='brand.900' width="24px" height="24px" mr="16px"/>
            Dashboard
          </MenuItem> */}
          {/* <MenuItem>
            <Icon as={VideoTime} color='brand.900' width="24px" height="24px" mr="16px"/>
            History
          </MenuItem> */}
          {/* <MenuItem>
            <Icon as={Setting2} color='brand.900' width="24px" height="24px" mr="16px"/>
            Settings
          </MenuItem> */}
          <MenuItem>
            <Icon as={MessageQuestion} color='brand.900' width="24px" height="24px" mr="16px"/>
            Help
          </MenuItem>
        </Menu>
      </Box>
  )
}
