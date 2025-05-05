import React, { useEffect, useState } from 'react'

export default function Lecture3() {

    const addresses = [
        {city: 'mumbai', pinCode: '400029', isDefault: true},
        {city: 'mumbai', pinCode: '400029', isDefault: false},
        {city: 'sawantwadi', pinCode: '416510', isDefault: false},
        {city: 'noida', pinCode: '123456', isDefault: false}
    ]

    const [defaultAddress, setDefaultAddress] = useState(addresses.find(({isDefault}) => isDefault)); 
    
    const [pinCode, setPinCode] = useState("")

    const onSetPinCode = () => {
        const selectAddress = addresses.find(address => address.pinCode === pinCode);
        setDefaultAddress(selectAddress)
        console.log(selectAddress)
        console.log(pinCode)
        console.log(defaultAddress)
    }

    useEffect(() => {
        console.log("updated Address ", defaultAddress)
    },[defaultAddress])


  return (  
    <>
    <h2>Dependency array mistake in useEffect hook</h2>
    <div>
        <input onChange={(e) => setPinCode(e.target.value)} placeholder='enter pincode' /> 
    </div>
    <div>
        <button onClick={onSetPinCode}>Set Pincode</button>
    </div>
    </>
  )
}
