import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({children}) => {
  
    return (
        <>
        <div className="flex flex-col  min-h-[100vh] px-[40px]">
            <Header/>
            <div className={'max-w-[1344px] flex-1 mx-auto mt-12 pb-[40px] w-full'}>
                <div className="relative flex mt-16 pb-[160px] text-white flex-col">
                    {children}
                </div>
            </div>
        </div>
        <Footer/> 
    </>
    )
  }

export default Layout;