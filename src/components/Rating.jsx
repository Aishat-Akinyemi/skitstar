import { Icon, Text } from '@chakra-ui/react'
import { Star1 } from 'iconsax-react'
import React from 'react'


export const Rating = ({number}) => {

    const RatingIcon = ({index}) =>{
        return (
            <Icon as={Star1}
              fill={index<=number ? 'purple' : ''}      
            />
        )
    }
    const ratings = () => {
        let ratingArr = []
        for (let i = 0; index < 5; i++) {
            ratingArr.push(<RatingIcon index={i}/>)
        }
        return ratingArr;
    }
  return (
    <div>{ratings} <Text fontSize="10px" fontWeight="500">{number}</Text></div>
  )
}
