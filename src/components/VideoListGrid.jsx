import { SimpleGrid, Text } from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import { VideoDisplayCard } from './VideoDisplayCard'

export const VideoListGrid = ({videoLists, isLoading}) => {  

  if(isLoading) {
    return <>Loading</>
  }

  return (
    <>
      {
        videoLists.length > 0 
        ?
        <SimpleGrid minChildWidth='360px' spacingX={2} spacingY="44px">
            {
              videoLists.map((video, ind) => (
                (
                  video 
                  &&
                  <VideoDisplayCard video={video} key={ind}/>
                )
              ))
            }
        </SimpleGrid>
        :
        <Text>NO VIDEOS TO DISPLAY</Text>
      }
    </>
  )
}
