import React, { use, useState } from 'react'
import { useRef } from 'react'

export default function Focus({setInputValue}) {

    const inputRef = useRef();

    const onFocusClick = () => {
        inputRef.current.focus();
    }

    const onChnageInput = (e) => {
        setInputValue(e.target.value)
    }


  return (
    <>
        <input ref={inputRef} onChange={onChnageInput} placeholder='Search...' />
        <button onClick={onFocusClick}>Focus on Input</button>
    </>
  )
}