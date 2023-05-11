import React from 'react'
import NavigationTab from '../Components/NavigationTab';
import { useRouter } from 'next/router'
import Hero from '../Components/Home/Hero';
import Material from '../Components/Home/Material';

function material() {
  const router = useRouter();


  return (
    <>
    <NavigationTab>
      <Hero isHome={false}/>
      <Material/>
    </NavigationTab>
    </>
  )
}

export default material