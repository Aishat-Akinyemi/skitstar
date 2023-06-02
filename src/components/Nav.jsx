import React from 'react';
import { IconButton } from '@chakra-ui/react'
import { Video, Notification,  } from 'iconsax-react';
import { ConnectWallet } from '@thirdweb-dev/react';



export const Nav = () => {
  return (
    <header className="header">
        <div className="logo">
            <IconButton
                colorScheme='purple'
                isRound = {true}
                p={2}
                icon={<Video color="#eee" variant="Bulk" size={32} /> }
            />
               
          <div className="company-name">SkitStars</div>
        </div>
        <div className="navigation">
          <ul>
            <li>Our Mission</li>
            <li>FAQ</li>
            <li>Become a Creator</li>
          </ul>
        </div>
        <div className="right-section">
            <IconButton
                // colorScheme='purple'
                // isRound = {true}
                mr={4}
                icon={<Notification size="32" color="#292D32" variant="Outline"/> }
            />
            
            <ConnectWallet color="#8247E5" style={{backgroundColor:"#8247E5", borderRadius: "45px", padding: '16px 32px', color:'white'}}/>
        </div>
      </header>
  )
}
