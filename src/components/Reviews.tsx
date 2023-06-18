import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Avatar,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { QuoteUpSquare } from "iconsax-react";
import React from "react";
// import { Rating } from "./Rating";

export const Reviews = ({ reviews }) => {
  return (
    <Box
      background="linear-gradient(97.39deg, #A569DE 33.35%, #DCD4FF 49.44%)"
      minHeight="320px"
      display="flex"
      justifyContent="space-around"
      ml="calc(50% - 50vw)"
      w="100vw"
    >
      {reviews.map((review, ind) => (
        <Card
          key={ind}
          w="392px"
          my="36px"
          borderRadius="20px"
          boxShadow="0px 40px 20px rgba(255, 227, 176, 0.2);"
        >
          <Box ml="85%" mt="10px">
            <QuoteUpSquare size="24px" color="purple" />
          </Box>
          <CardBody>
            <Text>{review.review}</Text>
          </CardBody>
          <CardFooter pb="10px">
            <HStack>
              <Avatar src={review.reviewerAvatar} size="md"></Avatar>
              <Text>{review.reviewer}</Text>
              {/* <Rating number={review.stars} /> */}
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
};
