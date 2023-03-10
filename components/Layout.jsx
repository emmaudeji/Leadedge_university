import React from 'react'
import Head from "next/head";
import Header from './containers/Header';
import Footer from './containers/Footer';
import Navbar from './containers/Navbar';

const layout = ({children}) => {
  return (
    <>
      <Head>
        <title>gogrene-leadedge</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div >
        <div className='fixed z-50 w-full'>
          <Header/>
          <Navbar />
        </div>
        
          {children}
        <Footer/>
      </div>
    </>
  )
}

export default layout