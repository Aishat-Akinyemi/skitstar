import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { VideoDisplayCard } from './VideoDisplayCard'

export const VideoListGrid = ({videoLists}) => {
  return (
    <SimpleGrid columns={3} spacingX="24px" spacingY="44px">
        <VideoDisplayCard/>
        <VideoDisplayCard/>
        <VideoDisplayCard/>
        <VideoDisplayCard/>
        <VideoDisplayCard/>
        <VideoDisplayCard/>
        <VideoDisplayCard/>
        <VideoDisplayCard/>
        <VideoDisplayCard/>
        <VideoDisplayCard/>
        <VideoDisplayCard/>
        <VideoDisplayCard/>
        <VideoDisplayCard/>
        <VideoDisplayCard/>
        <VideoDisplayCard/>
        <VideoDisplayCard/>
        <VideoDisplayCard/>
        <VideoDisplayCard/>
        <VideoDisplayCard/>
        <VideoDisplayCard/>
    </SimpleGrid>
  )
}
