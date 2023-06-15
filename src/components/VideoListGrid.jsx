import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { VideoDisplayCard } from './VideoDisplayCard'

export const VideoListGrid = ({videoLists}) => {
  return (
    <SimpleGrid minChildWidth='360px' spacingX={2} spacingY="44px">
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
