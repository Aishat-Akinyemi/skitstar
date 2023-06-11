import React from 'react'
import { Home2, Element4, VideoTime, Setting2, MessageQuestion,  Profile  } from 'iconsax-react';
import { List, Icon, Menu, MenuButton, MenuList, MenuItem, Box } from '@chakra-ui/react';
export const SideBar = () => {
  return (
      <Box minWidth="218px" display="flex" flexDirection="column" gap="24px" mr="24px" mt="32px">
          <Menu spacing={6}  color="#626262">
          <MenuItem>
            <Icon as={Home2} color='brand.900' width="24px" height="24px" mr="16px"/>
            Home
          </MenuItem>
          <MenuItem>
            <Icon as={Profile} color='brand.900' width="24px" height="24px" mr="16px"/>
            Profile
          </MenuItem>
          <MenuItem>
            <Icon size="32px" as={Element4} color='brand.900' width="24px" height="24px" mr="16px"/>
            Dashboard
          </MenuItem>
          <MenuItem>
            <Icon as={VideoTime} color='brand.900' width="24px" height="24px" mr="16px"/>
            History
          </MenuItem>
          <MenuItem>
            <Icon as={Setting2} color='brand.900' width="24px" height="24px" mr="16px"/>
            Settings
          </MenuItem>
          <MenuItem>
            <Icon as={MessageQuestion} color='brand.900' width="24px" height="24px" mr="16px"/>
            Help
          </MenuItem>
        </Menu>
      </Box>
  )
}
