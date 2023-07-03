import {
    Box,
    Card,
    CardBody,
    Heading,
    Stack,
    Text,
    Image,
    Flex,
    SimpleGrid,
  } from "@chakra-ui/react";
  import React from "react";
  import { ActionButton } from "./ActionButton";
  
  const Event = () => {
    const nativetoken = "FTM";
    return (
      <Flex gap="32px">
        {/* <Card w="360px" h="552px"> */}
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://media.licdn.com/dms/image/C4D03AQEYfSMJT3aPAA/profile-displayphoto-shrink_800_800/0/1656793439753?e=2147483647&v=beta&t=xBxxtaFX6MLF0gXAW4OcOlwhJHvQpbrKHNGp7qs-cMU"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Name</Heading>
              <Flex direction="row" justifyContent="space-between">
                <Text color="brand.900" fontSize="2xl">
                  450 {nativetoken}
                </Text>
                <Text fontSize="lg">Supply 100</Text>
              </Flex>
              {/* <Text>Location</Text> */}
            </Stack>
          </CardBody>
        </Card>
        <Flex direction="column" justifyContent="space-around" w="692px">
          <Box>
            <Heading>Description</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              accusamus quod in neque, quis ullam expedita veritatis rerum, eaque,
              alias exercitationem omnis fugiat obcaecati facilis pariatur
              corrupti voluptatum? Fugiat, quis?
            </Text>
          </Box>
          <Box>
            <Heading>Location</Heading>
            <Text>
             Location
            </Text>
          </Box>
        
          <ActionButton label="Purchase Event Ticket" width="max-content"/>
        </Flex>
      </Flex>
    );
  };
  

  const event = [1,2,3, 4,5]
  const Events = () => {
    return (
      <Flex direction="column" gap="24px">
        {
          event?.map((event, id) => (
            <Event key={id}/>
          ))
        }
      </Flex>
    )
  }
  
   

  export default Events;
  