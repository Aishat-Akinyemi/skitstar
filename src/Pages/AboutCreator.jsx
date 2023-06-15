import { Box, Image, VStack, Avatar, HStack, Text, Flex, Spacer, 
   Tabs, TabList, TabPanels, Tab, TabPanel  } from '@chakra-ui/react'
import React from 'react'
import CreatorInfo from '../components/CreatorInfo'
import { VideoListGrid } from '../components/VideoListGrid'
import Nfts from '../components/Nft'
import Events from '../components/Events'
import Ads from '../components/Ads'

export const AboutCreator = ({profile}) => {
    let temp = {profileImage: "https://media.licdn.com/dms/image/C4D03AQEYfSMJT3aPAA/profile-displayphoto-shrink_800_800/0/1656793439753?e=2147483647&v=beta&t=xBxxtaFX6MLF0gXAW4OcOlwhJHvQpbrKHNGp7qs-cMU",
            name: "The goood laugh zone",
            subscribers: 200000,
            postCount: 200,
            address: '',
            about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam perspiciatis quas quisquam eaque repellat? Ipsa pariatur illum odit adipisci molestias similique omnis, quo fugit repellat aspernatur ex earum. Vitae, iste.'
    }
  return (
    <Box width="79vw" display="flex" flexDirection="column">
        <CreatorInfo/>
        <Tabs variant='enclosed' my="52px" w="75vw">
            <TabList>
              <Tab>About</Tab>
              <Tab>Videos</Tab>
              <Tab>Events</Tab>
              <Tab>NFTs</Tab>
              <Tab>Ads Voucher</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text>{temp.about}</Text>
              </TabPanel>
              <TabPanel>
                <VideoListGrid/>
              </TabPanel>
              <TabPanel>
               <Events/>
              </TabPanel>
              <TabPanel>
                <Nfts/>
              </TabPanel>
              <TabPanel>
                <Ads/>
              </TabPanel>
            </TabPanels>
        </Tabs>
   
    </Box>
  )
}
