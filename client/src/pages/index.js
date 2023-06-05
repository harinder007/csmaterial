import React from 'react';
import Head from 'next/head';
import Home from '../Components/Home';
import NavigationTab from '../Components/NavigationTab';

function index() {
  return (
    <>
      <NavigationTab>
        <Home />
      </NavigationTab>
    </>
  )
}

export default index;
