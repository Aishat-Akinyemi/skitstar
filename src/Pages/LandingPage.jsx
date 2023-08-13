import React from 'react'
import { Box, Button, Flex, HStack, Text, VStack, Image, Heading, Center, Divider, AbsoluteCenter, Link } from '@chakra-ui/react'
import PressPlayBro from "../assets/PressPlayBro.svg"
import BitcoinTrans from "../assets/BitcoinTrans.svg";
import Steps from "../assets/Steps.svg";
import { VideoDisplayCard } from '../components/VideoDisplayCard'
import { FeatureCard } from '../components/FeatureCard';
import {ActionButton} from '../components/ActionButton';
import { Reviews } from '../components/Reviews';
import { Faq } from '../components/Faq';


export const LandingPage = () => {
  return (
    <Box mt="50px">
        <Box px="100px" pb="50px"> 
            <Flex justifyContent="space-between">
                <Box w="608px">
                    <Text fontFamily="Open Sans" w="608px" h="144px" fontWeight="700" fontSize="53px" lineHeight="72px" textTransform='capitalize' 
                        display="flex" alignItems="center" my="44px" fontStyle="normal"
                    >Embrace the Comedy Revolution</Text>
                    <Text fontWeight="600" fontSize="20px" lineHeight="27px" fontFamily="Open Sans" maxW="564px">
                    Watch, Laugh, and Unlock the Possibility to Buy Tickets, NFTs, and Ad Vouchers, Anytime, Anywhere 
                    </Text>
                    <Button colorScheme="purple" padding="16px 32px" borderRadius="45px" my="44px">Start Watching</Button>
                    <HStack>
                        <VStack  fontFamily="Open Sans" w="100px" h="76px">
                            <Text fontWeight="400"  fontSize="32px" lineHeight="44px" mb="10px"> 
                                5,000+</Text>
                            <Text fontWeight="600"  fontSize="16px" lineHeight="22px">
                                Comedians</Text>
                        </VStack>
                        <VStack  fontFamily="Open Sans" w="100px" h="76px">
                            <Text fontWeight="400"  fontSize="32px" lineHeight="44px" mb="10px"> 
                                5,00+</Text>
                            <Text fontWeight="600"  fontSize="16px" lineHeight="22px">
                                Events</Text>
                        </VStack>
                        <VStack  fontFamily="Open Sans" w="100px" h="76px">
                            <Text fontWeight="400"  fontSize="32px" lineHeight="44px" mb="10px"> 
                                5M+</Text>
                            <Text fontWeight="600"  fontSize="16px" lineHeight="22px">
                                Loyal Fans</Text>
                        </VStack>
                    </HStack>
                </Box>
                    <Image 
                    w="552px" h="524"
                        src={PressPlayBro}
                    />
            </Flex>
            <Box my="32px">
                <Center>
                    <Heading alignContent="center"
                        fontFamily="Open Sans"
                        fontWeight="700"
                        fontSize="36px"
                        lineHeight="49px"
                    >
                        Check Out <Text as="span" color="brand.900">Trending</Text> Videos
                    </Heading>
                </Center> 
                <Flex justifyContent="space-around" my="56px">
                    <VideoDisplayCard/>
                    <VideoDisplayCard/>
                    <VideoDisplayCard/>
                </Flex>
            </Box>
            <Box my="32px" id="about">
                <Center>
                    <Heading alignContent="center"
                        fontFamily="Open Sans"
                        fontWeight="700"
                        fontSize="36px"
                        lineHeight="49px"
                    >
                        For <Text as="span" color="brand.900">Creators</Text> 
                    </Heading>
                </Center> 
                <Flex my="56px" direction="column">
                    <Flex justifyContent="space-between" w="100%"> 
                        <VStack gap="40px" w="560px" h="388px" alignItems="flex-start">
                            <Text fontFamily="Open Sans" fontWeight="700" fontSize="42px" lineHeight="60px"
                                fontStyle="normal" h="180px" w="520px" color="#333333"
                            >
                                A new and better way to earn as a comedy creator
                            </Text>
                            <Text fontFamily="Open Sans" fontWeight="600" fontSize="24px" lineHeight="29px"
                                fontStyle="normal" color="#4F4F4F" w="540px" h="348px"
                            >
                                Upload your content on the skitstars platform reach a wider audience of comedy fans and make money will at it
                            </Text>
                            <ActionButton label="Become a Creator"/>
                        </VStack>
                        <Image  src={BitcoinTrans}  />
                    
                    </Flex>
                    <Flex gap="56px" justifyContent="space-between" borderTop="2px solid #B6B6B6" mt="100px" py="100px">
                        <FeatureCard 
                            w="392px" h="148px"
                            title='Create Events and Sell Tickets'
                            desc="Organize and sell tickets to live comedy shows, connecting performers with global audiences, all while embracing the convenience of cryptocurrency payments."
                        />
                        <FeatureCard 
                            w="392px" h="148px"
                            title='Mint and sell NFTs'
                            desc="Mint and sell unique NFTs, connecting fans with one-of-a-kind collectibles and opening doors to limitless possibilities in the digital realm."
                        />
                        <FeatureCard 
                            w="392px" h="148px" 
                            title='Sell Ads Vouchers'
                            desc="Collaborate with brands, earn revenue, and reach your dedicated fan base through targeted advertisements."
                        />
                    </Flex>    
                    <Flex justifyContent="space-between" w="100%" mt={['160px', '56px']}>
                        <VStack alignItems="flex-start" gap="40px" w="620px" mr="32px">
                            <Heading>
                                How it works
                            </Heading>
                            <Text fontSize="18px" >
                                Becoming a comedy creator on the SkitStars platform is a breeze. Connect your crypto wallet, register your brand, and unleash your creativity to create hilarious content that earns you revenue and recognition.
                                <br/> <br/>
                                Together, let's redefine the comedy industry, elevate the voices of talented creators, and create a world where laughter and prosperity go hand in hand.
                            </Text>
                            <ActionButton label="Learn More"/>
                        </VStack>
                        <HStack gap="20px">
                            <Image src={Steps}/>
                            <VStack gap="32px" w="356px">
                                <FeatureCard title="Connect Wallet" 
                                    desc="Seamlessly link your crypto wallet to the SkitStars platform, enabling secure and convenient transactions for your earnings as a comedy creator."/>
                                <FeatureCard title="Register Brand" 
                                    desc="Complete the easy registration process to establish your presence on SkitStars. Showcase your unique brand and style to attract a dedicated audience."/>
                                <FeatureCard title="Create and Earn" desc="Upload your skits to engage with comedy fans worldwide. you'll earn revenue through various monetization channels like ticket sales, NFTs, and ad vouchers"/>
                            </VStack>
                        </HStack>
                    </Flex>           
                </Flex>

            </Box>
            <Box  my="32px">
                <Center>
                        <Heading alignContent="center"
                            fontFamily="Open Sans"
                            fontWeight="700"
                            fontSize="36px"
                            lineHeight="49px"
                            my="56px"
                        >
                            Reviews From Our<Text as="span" color="brand.900"> Happy </Text> Clients
                        </Heading>
                    </Center> 
                    <Reviews reviews={revObj}/>
            </Box>
            <Box  my="32px" id="faq">
                <Center>
                        <Heading alignContent="center"
                            fontFamily="Open Sans"
                            fontWeight="700"
                            fontSize="36px"
                            lineHeight="49px"
                            my="56px"
                        >
                            Frequently Asked Questions
                        </Heading>
                    </Center> 
                    <Faq/>
            </Box>
        </Box>
    </Box>
  )
}


const revObj = [
    {
      reviewer: "Juliet Okoro",
      reviewerAvatar: "https://media.licdn.com/dms/image/C4D03AQEYfSMJT3aPAA/profile-displayphoto-shrink_800_800/0/1656793439753?e=2147483647&v=beta&t=xBxxtaFX6MLF0gXAW4OcOlwhJHvQpbrKHNGp7qs-cMU",
      review:
        "SkitStars turned my comedy talent into a profitable venture with their innovative monetization options like NFTs and ads ",
      stars: "5",
    },
    {
      reviewer: "Ekanem",
      reviewerAvatar: "https://media.licdn.com/dms/image/C4D03AQEYfSMJT3aPAA/profile-displayphoto-shrink_800_800/0/1656793439753?e=2147483647&v=beta&t=xBxxtaFX6MLF0gXAW4OcOlwhJHvQpbrKHNGp7qs-cMU",
      review:
        "SkitStars simplified ticket selling, enabling me to effortlessly organize shows and connect with comedy enthusiasts",
      stars: "4",
    },
    {
      reviewer: "Hikmah",
      reviewerAvatar: "https://media.licdn.com/dms/image/C4D03AQEYfSMJT3aPAA/profile-displayphoto-shrink_800_800/0/1656793439753?e=2147483647&v=beta&t=xBxxtaFX6MLF0gXAW4OcOlwhJHvQpbrKHNGp7qs-cMU",
      review:
        "SkitStars has become my go-to platform for comedy content. With a diverse range of comedy creators",
      stars: "5",
    },
  ];
  