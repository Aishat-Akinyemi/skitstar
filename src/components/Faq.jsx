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
        answer: 'Yes, events tickets can be bought on the platform.'    
    },
    {
        id: 2,
        question: 'Are the purchased NFTs transferable?',
        answer: 'Yes, You can transfer your NFTs to other users through a sale or gift!'    
    },
    {
        id: 3,
        question: 'How do I sell my own event tickets on the platform?',
        answer: 'You can register as a creator, then create NFT tickets for your evets.'    
    },
    {
        id: 4,
        question: 'How can I collaborate with brands for advertisement opportunities?',
        answer: 'Each creator has an "Ads Voucher" tab on their pages, you can buy ads voucher from a creator who then advertises for you. '    
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
