import React from 'react'
import { Box } from '@chakra-ui/react'

export const Home = () => {
  return (
    <Box>
        <Box className='tabs'>
            <button>All   </button>
            <button>Musical</button>
            <button>Satire</button>
            <button>Parody</button>
            <button>Comedy</button>
            <button>Parody</button>
            <button>Sketch</button>            
        </Box>
        <Box>
            <input type="text" placeholder="Search Creators" />            
        </Box>
    </Box>
  )
}
