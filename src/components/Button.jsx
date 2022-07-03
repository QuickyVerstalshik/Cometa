import React, { Component } from 'react'

const Button = ({children, bg, w, h, r, bd, color, mb, m}) => {
        return (
            <button style={{backgroundColor:bg, width:w+'px', margin:m, height:h+'px', borderRadius:r+'px', border:bd, color:color, marginBottom:mb+'px',}}  className="button mt-[30px] flex w-[145px] h-[38px] flex-col items-center justify-center text-[24px] font-[700] ">
                {children}
            </button>
        )
    }



export default Button;