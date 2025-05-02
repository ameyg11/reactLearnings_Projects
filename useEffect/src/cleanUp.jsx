import React, { useEffect, useState } from 'react'

export default function CleanUp() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const timeout = setInterval(() => {
            setCount(count + 1)
        }, 1000);
        console.log(timeout)

        return (() => {
            clearInterval(timeout)
        })
    })


  return (
    <div>
      <p style={{background:"red"}}>{count} yoyo</p>
    </div>
  )
}
