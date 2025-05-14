
import { createContext, useContext, useState } from 'react'


const initialValue = {
    count: 0,
}

const CountContext = createContext(initialValue);
console.log(CountContext)


// Provider
const CountProvider = ({children}) => {

    const [count, setCount] = useState(1);

    return (
        <CountContext.Provider value = {{count, setCount}}>
            {children}
        </CountContext.Provider>
    )
}

// Consumer

const useCount = () => useContext(CountContext) //use count is consumer and CountProvider is provider

export {useCount, CountProvider};

