import { createContext, useState, useEffect } from 'react';

export const CoinMarketContex = createContext();

export const CoinMarketProvider = ({ children }) => {

    const getTopTenCoins = async () => {
        try {
            const res = await fetch('/api/getToken')
            const data  = await res.json()
            return data.data.data
        } catch (e) {
            console.log(e.message)
        }
    }
    return (
        <CoinMarketContex.Provider value={{getTopTenCoins}}>
            {children}
        </CoinMarketContex.Provider>
    )
}