import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='flex w-full h-[73px] justify-center mt-[46px] items-center'>
          <div className="flex w-full h-[73px] max-w-[1344px] items-center justify-between">
              <div className="header-menu-left flex justify-between w-[50%]">
                   <img className='w-[116px] h-[33px] mr-[20px]' src="img/logo.svg" alt="logo" />
              <div className="header-menu flex items-center justify-between max-w-[500px] mr-[40px]">
                  
                  <a href="##" className="header-menu-button text-[#FBFBFB]">Главная</a>
                  <a href="##" className="header-menu-button text-[#FBFBFB]">О проекте</a>
                  <a href="##" className="header-menu-button text-[#FBFBFB]">Обзор пакетов</a>
                  <a href="##" className="header-menu-button text-[#FBFBFB]">Правила и акции</a>
              </div>
              </div>
             
              <div className="header-menu-right flex w-[50%]">
                  <div className="header-coins flex min-w-[120px] w-[173px] justify-between items-center">
                    <a href="##">
                        <img src="img/header-btc.svg" alt="btc" />
                    </a>
                    <a href="##">
                        <img src="img/header-ethereum.svg" alt="btc" />
                    </a>
                    <a href="##">
                        <img src="img/L12.svg" alt="btc" />
                    </a>
              </div>
              <div className="menu-right flex items-center justify-between  min-h-[80px] w-[120px] mx-[20px] mr-[30px]">
                  <a href="##" className="header-menu-button">Русский</a>
                  <a href="##" className="header-menu-button">RU</a>
              </div>
              <div className="header-user flex items-center justify-between">
                  <img className='w-[42px] h-[42px]' src="img/icon/user.svg" alt="user" />
                  <p>Cometa Club 1</p>
              </div>
              <button className='menu-button ml-[20px]'>
                  <img src="img/icon/burger.svg" alt="burger" />
              </button>
              </div>
          </div>
      </div>
    )
  }
}
