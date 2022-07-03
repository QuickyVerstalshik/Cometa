import React, { Component } from 'react'
import { Tooltip } from "@material-tailwind/react";
import Button from "../components/Button";

export default function BuyPacket() {
  
  return (
    <div>
      <div>
        <h1 className="font-[600] text-[#FDD536] text-[44px] mb-[60px]">Данные пользователя</h1>
        <img className="absolute z-[-1] top-[100px] right-[180px]" src="img/mtr.jpg" alt="mtr" />
        <div className='mb-[40px]'>
            <h2 className='text-[24px] text-[#F2F2F3] font-[500] mb-[28px]'>Наименование пакета</h2>
                    <div className="radius-input">
                    <select id="year">
                <option value="hide">Starter</option>
                <option value="Starter">Starter</option>
                <option value="Basic">Basic</option>
                <option value="Networker">Networker</option>
                <option value="Business">Business</option>
                <option value="Trader">Trader</option>
                <option value="VIP">VIP</option>
            </select>
                    </div>  
                    <nav className='flex  items-center'>
                      <p className='text-[19px] text-[#888A8E] my-[13px] mr-[10px]'>Выберите пакет</p>
                      <Tooltip placement='bottom' content="Узнать подробнее о пакетах " className='tooltip' >
                      <img className='relative top-[3px]' src="img/info-tooltip.svg" alt="tooltip" />
                </Tooltip>
                    </nav>
        </div>
        
        <div className='mb-[40px]'>
          <h2 className='text-[24px] text-[#F2F2F3] font-[500] mb-[28px]'>Монета покупки</h2>
        <div className="radius-input">
        <select id="year">
    <option value="hide">USDT</option>
    <option value="USDT">USDT</option>
    <option value="CoMetaCoin">CoMetaCoin</option>
    <option value="Bitcoin">Bitcoin</option>
    <option value="Ethereum">Ethereum</option>
</select>
        </div>  
        <nav className='flex items-center'>
          <p className='text-[19px] text-[#888A8E] my-[13px] mr-[10px]'>Выберите валюту покупки</p>
        </nav>
        </div>
        <div className='mb-[40px]'>
        <h2 className='text-[24px] text-[#F2F2F3] font-[500] mb-[28px]'>Price</h2>
          <div class="radius-input">
          <input type="text" class="input-classic" placeholder="" />
          </div>
        </div>
        <div className='mb-[80px]'>
        <h2 className='text-[24px] text-[#F2F2F3] font-[500] mb-[28px]'>Activation</h2>
          <div class="radius-input">
          <input type="text" class="input-classic" placeholder="" />
          </div>
        </div>
        <Button w='258' h='55' r='40' bg='#FCD536' color='#1D2229'>
              Купить
            </Button>
      </div>
    </div>
  );
}
