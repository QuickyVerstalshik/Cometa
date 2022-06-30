import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class Layout extends Component {
  render() {
    return (
        <>
        <div className="flex flex-col  min-h-[100vh] px-[40px]">
            <Header/>
            <div className={'max-w-[1344px] flex-1 mx-auto mt-12 w-full'}>
                <div className="flex mt-12 pb-[160px] text-white">
                    content
                </div>
            </div>
        </div>
        <Footer/> 
    </>
    )
  }
}
