import React from 'react'
import { Home2, Element4, VideoTime, Setting2, MessageQuestion, HambergerMenu, Profile  } from 'iconsax-react';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
export const SideBar = () => {
  return (
<List spacing={6}>
  <ListItem>
    <ListIcon as={Home2} color='brand.900' width="24px" height="24px"/>
    Home
  </ListItem>
  <ListItem>
    <ListIcon as={Profile} color='brand.900' width="24px" height="24px"/>
    Profile
  </ListItem>
  <ListItem>
    <ListIcon size="32px" as={Element4} color='brand.900' width="24px" height="24px"/>
    Dashboard
  </ListItem>
  <ListItem>
    <ListIcon as={VideoTime} color='brand.900' width="24px" height="24px"/>
    History
  </ListItem>
  <ListItem>
    <ListIcon as={Setting2} color='brand.900' width="24px" height="24px"/>
    Settings
  </ListItem>
  <ListItem>
    <ListIcon as={MessageQuestion} color='brand.900' width="24px" height="24px"/>
    Help
  </ListItem>
</List>
  )
}
