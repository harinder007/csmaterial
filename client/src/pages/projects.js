import React from 'react';
import NavigationTab from '../Components/NavigationTab';
import { useRouter } from 'next/router';

function projects() {

  const router = useRouter();
  console.log(router)

  return (
    <>
      <NavigationTab>PROJECTS</NavigationTab>
    </>
  )
}

export default projects;
