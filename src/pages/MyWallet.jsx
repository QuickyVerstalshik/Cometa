import React, { Component } from 'react'
import { Tooltip } from "@material-tailwind/react";
import Button from "../components/Button";

export default function MyWallet() {
  
  return (
    <div>
      <div>
      <h1 className="font-[600] text-[#FDD536] text-[44px] mb-[90px]">Мой кошелек</h1>
      <div className='flex justify-center'>
            <h1 className="font-[600] tracking-[0.05em] text-[#F2F2F3] text-[22px] mb-[80px] mx-auto">Структура вашего кошелька в пересчете на USDT</h1>
      </div>
      <div className="wallet-stats flex justify-between items-center mb-[180px]">
        <div className="flex flex-col">
        <Button mb='36' w='342' h='106' r='100' bg='#FCD536' color='#1D2229'>
              <h2 className='text-[#1D2229] text-[32px] font-[700] tracking-[0.07em] mb-[10px]'>35,4%</h2>
              <p className="text-[#1D2229] text-[18px] font-[500] tracking-[0.07em]">USDT</p>
            </Button>
            <Button w='342' h='106' r='100' bg='#6D7785' color='#1D2229'>
              <h2 className='text-[#1D2229] text-[32px] font-[700] tracking-[0.07em] mb-[10px]'>31,6%</h2>
              <p className="text-[#1D2229] text-[18px] font-[500] tracking-[0.07em]">Ethereum </p>
            </Button>
        </div>
        <img src="img/wallet-stats.svg" alt="wallet" />
        <div className="flex flex-col">
        <Button mb='36' w='342' h='106' r='100' bg='#EDB612' color='#1D2229'>
              <h2 className='text-[#1D2229] text-[32px] font-[700] tracking-[0.07em] mb-[10px]'>14,4%</h2>
              <p className="text-[#1D2229] text-[18px] font-[500] tracking-[0.07em]">Bitcoin</p>
            </Button>
            <Button w='342' h='106' r='100' bg='#F2F2F3' color='#1D2229'>
              <h2 className='text-[#1D2229] text-[32px] font-[700] tracking-[0.07em] mb-[10px]'>18,6%</h2>
              <p className="text-[#1D2229] text-[18px] font-[500] tracking-[0.07em]">CoMetaCoin </p>
            </Button>
        </div>
        
      </div>
      <div className="flex flex-col">
          <div className="flex justify-between items-center mb-[80px]">
            <div className="flex justify-between items-center">
              <img className='mr-[46px]' src="img/coin1.svg"  />
              <div className="flex flex-col w-[120px]">
                <h2 className='font-[700] text-[#F2F2F3] text-[22px] tracking-[0.05em] mb-[21px]'>USDT</h2>
                <h2 className='font-[700] text-[#F2F2F3] text-[22px] tracking-[0.05em]'>Tether</h2>
              </div>
            </div>
            <h2 className='font-[700] text-[#F2F2F3] text-[32px] tracking-[0.07em]'>35.4%</h2>
            <div className="flex flex-col">
              <h2 className='font-[700] text-[#F2F2F3] text-[32px] tracking-[0.07em]'>0,12544186</h2>
              <h2 className='font-[700] text-[#6D7785] text-[22px] tracking-[0.07em]'>$ 0,9768</h2>
            </div>
            <div className="flex items-center">
              <img className='mr-[15px]' src="img/up.svg"  />
              <h1 className='text-[#299E00] text-[32px] font-[500]'>1.90%</h1>
            </div>
          </div>
          <div className="flex justify-between items-center mb-[80px]">
            <div className="flex justify-between items-center">
              <img className='mr-[46px]' src="img/coin2.svg"  />
              <div className="flex flex-col w-[120px]">
                <h2 className='font-[700] text-[#F2F2F3] text-[22px] tracking-[0.05em] mb-[21px]'>ETH</h2>
                <h2 className='font-[700] text-[#F2F2F3] text-[22px] tracking-[0.05em]'>Ethereum</h2>
              </div>
            </div>
            <h2 className='font-[700] text-[#F2F2F3] text-[32px] tracking-[0.07em]'>31.6%</h2>
            <div className="flex flex-col">
              <h2 className='font-[700] text-[#F2F2F3] text-[32px] tracking-[0.07em]'>0,12544186</h2>
              <h2 className='font-[700] text-[#6D7785] text-[22px] tracking-[0.07em]'>$ 1 925,3</h2>
            </div>
            <div className="flex items-center">
              <img className='mr-[15px]' src="img/down.svg"  />
              <h1 className='text-[#299E00] text-[32px] font-[500]'>1.16%</h1>
            </div>
          </div>
          <div className="flex justify-between items-center mb-[80px]">
            <div className="flex justify-between items-center">
              <img className='mr-[46px]' src="img/coin3.svg"  />
              <div className="flex flex-col w-[120px]">
                <h2 className='font-[700] text-[#F2F2F3] text-[22px] tracking-[0.05em] mb-[21px]'>CMC</h2>
                <h2 className='font-[700] text-[#F2F2F3] text-[22px] tracking-[0.05em]'>CoMetaCoin</h2>
              </div>
            </div>
            <h2 className='font-[700] text-[#F2F2F3] text-[32px] tracking-[0.07em]'>18.6%</h2>
            <div className="flex flex-col">
              <h2 className='font-[700] text-[#F2F2F3] text-[32px] tracking-[0.07em]'>0,12544186</h2>
              <h2 className='font-[700] text-[#6D7785] text-[22px] tracking-[0.07em]'>$ 1,99178</h2>
            </div>
            <div className="flex items-center">
              <img className='mr-[15px]' src="img/up.svg"  />
              <h1 className='text-[#299E00] text-[32px] font-[500]'>0.73%</h1>
            </div>
          </div>
          <div className="flex justify-between items-center mb-[80px]">
            <div className="flex justify-between items-center">
              <img className='mr-[46px]' src="img/coin4.svg"  />
              <div className="flex flex-col w-[120px]">
                <h2 className='font-[700] text-[#F2F2F3] text-[22px] tracking-[0.05em] mb-[21px]'>BTC</h2>
                <h2 className='font-[700] text-[#F2F2F3] text-[22px] tracking-[0.05em]'>Bitcoin</h2>
              </div>
            </div>
            <h2 className='font-[700] text-[#F2F2F3] text-[32px] tracking-[0.07em]'>14.4%</h2>
            <div className="flex flex-col">
              <h2 className='font-[700] text-[#F2F2F3] text-[32px] tracking-[0.07em]'>0,12544186</h2>
              <h2 className='font-[700] text-[#6D7785] text-[22px] tracking-[0.07em]'>$ 29 041,24</h2>
            </div>
            <div className="flex items-center">
              <img className='mr-[15px]' src="img/up.svg"  />
              <h1 className='text-[#299E00] text-[32px] font-[500]'>1.07%</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-end mb-[80px]">
        <div class="search">
          <img className='search-icon w-[26px] mr-[15px]' src="img/icon/search.svg"   />
          <input placeholder="Поиск по названию" type="text" class="search-field text-[22px] font-[700] tracking-[0.05em]"  />
        </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-[80px]">
            <div className="flex items-center">
              <h1 className='font-[700] text-[#F2F2F3] text-[50px] tracking-[0.05em] mr-[31px]'>USDT</h1>
              <h1 className='font-[700] text-[#474B52] text-[50px] tracking-[0.05em]'>Tether</h1>
            </div>
            <div className="flex justify-between items-center">
            <Button w='200' h='62' r='100' bg='#FCD536' color='#1D2229' m='0px 40px 0px 0px'>
              Пополнить
            </Button>
            <Button  w='200' h='62' r='100' bg='#F2F2F3' color='#1D2229'm='0px 40px 0px 0px'>
              Обменять
            </Button>
            <Button w='200' h='62' r='100' bd='1px solid #FDD536' bg='#1D2229' color='#FDD536' m='0px 0px 0px 0px'>
              Вывести
            </Button>
            </div>
          </div>
          <div className="flex justify-between items-center mb-[80px]">
            <div className="flex items-center">
              <h1 className='font-[700] text-[#F2F2F3] text-[50px] tracking-[0.05em] mr-[31px]'>ETH</h1>
              <h1 className='font-[700] text-[#474B52] text-[50px] tracking-[0.05em]'>Ethereum</h1>
            </div>
            <div className="flex justify-between items-center">
            <Button w='200' h='62' r='100' bg='#FCD536' color='#1D2229' m='0px 40px 0px 0px'>
              Пополнить
            </Button>
            <Button  w='200' h='62' r='100' bg='#F2F2F3' color='#1D2229'm='0px 40px 0px 0px'>
              Обменять
            </Button>
            <Button w='200' h='62' r='100' bd='1px solid #FDD536' bg='#1D2229' color='#FDD536' m='0px 0px 0px 0px'>
              Вывести
            </Button>
            </div>
          </div>
          <div className="flex justify-between items-center mb-[80px]">
            <div className="flex items-center">
              <h1 className='font-[700] text-[#F2F2F3] text-[50px] tracking-[0.05em] mr-[31px]'>CMC</h1>
              <h1 className='font-[700] text-[#474B52] text-[50px] tracking-[0.05em]'>CoMetaCoin</h1>
            </div>
            <div className="flex justify-between items-center">
            <Button w='200' h='62' r='100' bg='#FCD536' color='#1D2229' m='0px 40px 0px 0px'>
              Пополнить
            </Button>
            <Button  w='200' h='62' r='100' bg='#F2F2F3' color='#1D2229'm='0px 40px 0px 0px'>
              Обменять
            </Button>
            <Button w='200' h='62' r='100' bd='1px solid #FDD536' bg='#1D2229' color='#FDD536' m='0px 0px 0px 0px'>
              Вывести
            </Button>
            </div>
          </div>
          <div className="flex justify-between items-center mb-[80px]">
            <div className="flex items-center">
              <h1 className='font-[700] text-[#F2F2F3] text-[50px] tracking-[0.05em] mr-[31px]'>BTC</h1>
              <h1 className='font-[700] text-[#474B52] text-[50px] tracking-[0.05em]'>Bitcoin</h1>
            </div>
            <div className="flex justify-between items-center">
            <Button w='200' h='62' r='100' bg='#FCD536' color='#1D2229' m='0px 40px 0px 0px'>
              Пополнить
            </Button>
            <Button  w='200' h='62' r='100' bg='#F2F2F3' color='#1D2229'm='0px 40px 0px 0px'>
              Обменять
            </Button>
            <Button w='200' h='62' r='100' bd='1px solid #FDD536' bg='#1D2229' color='#FDD536' m='0px 0px 0px 0px'>
              Вывести
            </Button>
            </div>
          </div>
        </div>
        <h1 className="font-[600] tracking-[0.05em] text-[#F2F2F3] text-[22px] mt-[40px]">При выводе средств с кошелька взимается комиссия от 2% до 5% в зависимости от размера суммы </h1>
      </div>
    </div>
  );
}
