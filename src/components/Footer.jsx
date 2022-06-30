import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className='w-full min-h-[305px] bg-[#FBFBFB] py-[66px]'>
          <div className="footer-container flex max-w-[1344px] mx-auto justify-between">
              <div className="footer-left flex flex-col max-w-[405px] min-h-[211px] pb-[20px]">
                    <img className='w-[114px] h-[50px]' src="img/logo-footer.svg" alt="footer" />
                    <p className='text-[17px] font-[400] text-[#1D2229] text-left'>Нужен постоянный и надежный доход? <br />  Хотите встать среди первых и получить большее?Тогда наш проект для Вас!</p>
                    <button className="support-button flex w-[145px] h-[38px] items-center justify-center bg-[#FCD536] rounded-[20px] text-[17px] font-[700]">Поддержка</button>
              </div>
              <div className="header-menu flex items-center justify-between max-w-[460px] mr-[40px]">
                  
                  <a href="##" className="header-menu-button text-[#1D2229]">Главная</a>
                  <a href="##" className="header-menu-button text-[#1D2229]">О проекте</a>
                  <a href="##" className="header-menu-button text-[#1D2229]">Обзор пакетов</a>
                  <a href="##" className="header-menu-button text-[#1D2229]">Правила и акции</a>
              </div>
              <div className="footer-right flex flex-col">
                    <span className='flex items-center my-[7px] font-[500] text-[17px] tracking-[2px]'>
                        <img className='w-[20px]  mr-[15px]' src="img/icon/tel.svg" alt="tel" />
                        xxx-xxx-xx-xx
                    </span>
                    <span className='flex items-center my-[7px] font-[500] text-[17px] tracking-[2px]'>
                        <img className='w-[20px]  mr-[15px]' src="img/icon/mail.svg" alt="tel" />
                        CoMetaClubMail@gmail.com
                    </span>
                    <span className='flex items-center my-[7px] font-[500] text-[17px] tracking-[2px]'>
                        <img className='w-[20px]  mr-[15px]' src="img/icon/tg.svg" alt="tel" />
                        Наш Telegram канал
                    </span>
                    <span className='flex items-center my-[7px] font-[500] text-[17px] tracking-[2px]'>
                        <img className='w-[20px]  mr-[15px]' src="img/icon/tg.svg" alt="tel" />
                        Наша группа Telegram
                    </span>
                    <span className='flex items-center my-[7px] font-[500] text-[17px] tracking-[2px]'>
                        <img className='w-[20px]  mr-[15px]' src="img/icon/wp.svg" alt="tel" />
                        Наша группа WhatsApp
                    </span>
                    <span className='flex items-center my-[7px] font-[500] text-[17px] tracking-[2px]'>
                        <img className='w-[20px]  mr-[15px]' src="img/icon/wp.svg" alt="tel" />
                        Наш Facebook
                    </span>
              </div>
          </div>
      </div>
    )
  }
}
