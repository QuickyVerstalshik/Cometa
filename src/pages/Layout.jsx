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
                    <div >
      <div className="p-0 m-0 mb-[180px]">
        <h1 className="font-[600] text-[#FDD536] text-[44px] mb-[60px]">Данные пользователя</h1>
      <img className="absolute z-[-1] top-0 right-[20px]" src="img/mtr.jpg" alt="mtr" />
      <div className="flex user-info">
        <img className="mr-[40px]" src="img/vip.svg" alt="vip" />
        <div className="info">
          <nav className="flex flex-col mb-[36px]"> 
            <h2 className="text-[#FBFBFB]  whitespace-nowrap text-[22px] mb-[28px]">UserName</h2>
            <p className="text-[#FDD536] whitespace-nowrap text-[21px]">Cometa Club 1</p>
          </nav>
          <nav className="flex flex-col mb-[36px]"> 
            <h2 className="text-[#FBFBFB]  whitespace-nowrap text-[22px] mb-[28px]">E-mail</h2>
            <p className="text-[#FDD536] whitespace-nowrap text-[21px]">111@cometaclub.com</p>
          </nav>
          <nav className="flex flex-col mb-[36px]"> 
            <h2 className="text-[#FBFBFB]  whitespace-nowrap text-[22px] mb-[28px]">Roles</h2>
            <p className="text-[#FDD536] whitespace-nowrap text-[21px]">ROLE_SUPER_ADMIN , ROLE_USER</p>
          </nav>
          <nav className="flex mb-[36px] items-center"> 
            <h2 className="text-[#FBFBFB]  whitespace-nowrap text-[22px] mr-[20px]">Verified</h2>
            <img src="img/check.svg" alt="check" />
          </nav>
          <Button w='258' h='55' r='40' bg='#FCD536' color='#1D2229'>
              Редактировать
            </Button>
        </div>
      </div>
      </div>

      <div className="relative p-0 mb-[200px]">
        <h1 className="font-[600] whitespace-nowrap text-[#FDD536] whitespace-nowrap text-[44px] mb-[80px]">Персональные данные</h1>
      <img className="absolute z-[-1] top-[80px] right-[20px]" src="img/glc.svg"  alt="mtr" />
      <div className="flex user-info">
        
        <div className="info">
          <nav className="flex mb-[18px] w-[380px]"> 
            <h2 className="text-[#FBFBFB]  whitespace-nowrap text-[22px] mb-[18px] w-[180px]">Имя</h2>
            <p className="text-[#FDD536] whitespace-nowrap text-[21px] w-[180px]">Cometa Club 1</p>
          </nav>
          <nav className="flex mb-[18px] w-[380px] "> 
            <h2 className="text-[#FBFBFB]  whitespace-nowrap text-[22px] mb-[18px] w-[180px]">Фамилия</h2>
            <p className="text-[#FDD536] whitespace-nowrap text-[21px] w-[180px]">111@cometaclub.com</p>
          </nav>
          <nav className="flex mb-[18px] w-[380px]"> 
            <h2 className="text-[#FBFBFB]  whitespace-nowrap text-[22px] mb-[18px] w-[180px]">Телефон</h2>
            <p className="text-[#FDD536] whitespace-nowrap text-[21px]">457468456</p>
          </nav>
          <nav className="flex mb-[18px] w-[380px]"> 
            <h2 className="text-[#FBFBFB]  whitespace-nowrap text-[22px] mb-[18px] w-[180px]">Государство</h2>
            <p className="text-[#FDD536] whitespace-nowrap text-[21px] w-[180px]">Россия</p>
          </nav>
          <nav className="flex mb-[18px] w-[380px]"> 
            <h2 className="text-[#FBFBFB]  whitespace-nowrap text-[22px] mb-[18px] w-[180px]">Регион</h2>
            <p className="text-[#FDD536] whitespace-nowrap text-[21px] w-[180px] whitespace-nowrap">Ярославская область </p>
          </nav>
          <nav className="flex mb-[18px] w-[380px]"> 
            <h2 className="text-[#FBFBFB]  whitespace-nowrap text-[22px] mb-[18px] w-[180px]">Город</h2>
            <p className="text-[#FDD536] whitespace-nowrap text-[21px] w-[180px]">Ростов</p>
          </nav>
          <nav className="flex mb-[18px] w-[380px]"> 
            <h2 className="text-[#FBFBFB]  whitespace-nowrap text-[22px] mb-[18px] w-[180px]">Индекс</h2>
            <p className="text-[#FDD536] whitespace-nowrap text-[21px] w-[180px]">345678</p>
          </nav>
          <nav className="flex mb-[18px] w-[380px]"> 
            <h2 className="text-[#FBFBFB]  whitespace-nowrap text-[22px] mb-[18px] w-[180px]">Улица</h2>
            <p className="text-[#FDD536] whitespace-nowrap text-[21px] w-[180px]">Окружная</p>
          </nav>
          <nav className="flex mb-[18px] w-[380px]"> 
            <h2 className="text-[#FBFBFB]  whitespace-nowrap text-[22px] mb-[18px] w-[180px]">Дом</h2>
            <p className="text-[#FDD536] whitespace-nowrap text-[21px] w-[180px]">1</p>
          </nav>
          <nav className="flex mb-[18px] w-[380px]"> 
            <h2 className="text-[#FBFBFB]  whitespace-nowrap text-[22px] mb-[18px] w-[180px]">Блок/Корпус</h2>
            <p className="text-[#FDD536] whitespace-nowrap text-[21px] w-[180px]">2</p>
          </nav>
          <nav className="flex mb-[18px] w-[380px]"> 
            <h2 className="text-[#FBFBFB]  whitespace-nowrap text-[22px] mb-[18px] w-[180px]">Квартираица</h2>
            <p className="text-[#FDD536] whitespace-nowrap text-[21px] w-[180px]">126</p>
          </nav>
          <Button w='258' h='55' r='40' bg='#FCD536' color='#1D2229'>
              Редактировать
            </Button>
        </div>
      </div>
      </div>
      <div className="my-team">
        <h1 className="font-[600] whitespace-nowrap text-[#FDD536] whitespace-nowrap text-[44px] mb-[80px]">Моя команда</h1>
        <div className="flex w-full justify-between mb-[120px]">
          <nav className="flex w-[580px] justify-between pr-[40px]"> 
            <h2 className="text-[#FBFBFB]  font-[600] whitespace-nowrap text-[32px] ">Количество участников</h2>
            <p className="text-[#FDD536] font-[600] whitespace-nowrap text-[31px] ">4</p>
          </nav>
          <nav className="flex w-[580px] justify-between pr-[40px]"> 
            <h2 className="text-[#FBFBFB]  font-[600] whitespace-nowrap text-[32px] ">Баланс команды</h2>
            <p className="text-[#FDD536] font-[600] whitespace-nowrap text-[31px] ">31 000 USDT</p>
          </nav>
        </div>
        
      
        
        <Slider {...settings} className="App-slider ">
        <div className="flex flex-col justify-center">
    <img src="img/slider-vip.svg" className="App-slider-block mb-[30px]" />
    <h1 className="font-[600] text-[#FBFBFB] text-[28px] ml-[27%]">Cometa Club 1</h1>
  </div>
  <div className="flex flex-col justify-center">
    <img src="img/slider-vip.svg" className="App-slider-block mb-[30px]" />
    <h1 className="font-[600] text-[#FBFBFB] text-[28px] ml-[27%]">Cometa Club 2</h1>
  </div>
  <div className="flex flex-col justify-center">
    <img src="img/slider-vip.svg" className="App-slider-block mb-[30px]" />
    <h1 className="font-[600] text-[#FBFBFB] text-[28px] ml-[27%]">Cometa Club 3</h1>
  </div>
          <div className="flex flex-col justify-center">
    <img src="img/slider-vip.svg" className="App-slider-block mb-[30px]" />
    <h1 className="font-[600] text-[#FBFBFB] text-[28px] ml-[27%]">Cometa Club 4</h1>
  </div>
          <div className="flex flex-col justify-center">
    <img src="img/slider-vip.svg" className="App-slider-block mb-[30px]" />
    <h1 className="font-[600] text-[#FBFBFB] text-[28px] ml-[27%]">Cometa Club 5</h1>
  </div>
          <div className="flex flex-col justify-center">
    <img src="img/slider-vip.svg" className="App-slider-block mb-[30px]" />
    <h1 className="font-[600] text-[#FBFBFB] text-[28px] ml-[27%]">Cometa Club 6</h1>
  </div>
          <div className="flex flex-col justify-center">
    <img src="img/slider-vip.svg" className="App-slider-block mb-[30px]" />
    <h1 className="font-[600] text-[#FBFBFB] text-[28px] ml-[27%]">Cometa Club 7</h1>
  </div>
  
        </Slider>
      </div>
      <div className="flex w-full justify-center mt-[60px]">
          <Button w='354' h='92' r='30' bd='5px solid #FBD539' bg='#4A4E54' color='#FBD539'>
             <p className="mb-[6px]">Место в линии</p> Ovner
            </Button>
      </div>
      
    </div>
                </div>
            </div>
        </div>
        <Footer/> 
    </>
    )
  }

export default Layout;
