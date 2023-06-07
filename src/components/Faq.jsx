import {useState} from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

const faqList = [
    {
        id: 1,
        question: 'Can I purchase event tickets directly on the platform?',
        answer: 'AElf is a decentralized blockchain network empowered by cloud computing infrastructure. Each node on aelf mainnet is independent, with outstanding performance and unlimited scalability.'    
    },
    {
        id: 2,
        question: 'Are the purchased NFTs transferable?',
        answer: 'AElf academy is a Learn and Earn decentralized, self-sustaining learning platform that seeks to equip learners with knowledge on how to Build d-Apps on AElf blockchain. Learners can earn Elf tokesn by successfully completing Quests at the end of each course.  AElf Academy makes your learning simple, fun and rewarding!'    
    },
    {
        id: 3,
        question: 'How do I sell my own event tickets on the platform?',
        answer: 'To build the ecosystem by making learning fun, exciting and rewarding. To make knowledge easily accessible. To grow the aAelf developer community. Join the community of builders and learn along with leading developers.'    
    },
    {
        id: 4,
        question: 'How can I collaborate with brands for advertisement opportunities?',
        answer: 'AElf is an advanced blockchain and it is simple to start building on AELF. You can quickly go from Zero to Hero. AElf ecosystem has developer tools to support your journey. Aelf is unlimitedly scalable. '    
    }
]

export const Faq = () => {
    const [faqs] = useState(faqList)
  return (
    <Box>
        {
            faqs.length > 0?
            (
                <Accordion defaultIndex={[0]} allowMultiple>
                    {faqs.map((faq, ind) =>(
                        <AccordionItem key={ind}>
                            <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                {faq.question}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>{faq.answer}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}           
                </Accordion>
                
            )
            : ''
        }
    </Box>
  )
}
