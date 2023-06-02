import * as React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";
import { Nav } from './components/Nav';
import { SideBar } from './components/SideBar';

export default function App() {
  return (
    <>
    <Nav/>
    <SideBar/>
    </>
  )
}