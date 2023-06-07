import React from 'react'
import { Heading, Box, Text } from "@chakra-ui/react";

export const FeatureCard = ({ title, desc, ...rest }) => {
    return (
        <Box {...rest}>
          <Heading fontSize='xl'>{title}</Heading>
          <Text mt={4}>{desc}</Text>
        </Box>
      )
}
