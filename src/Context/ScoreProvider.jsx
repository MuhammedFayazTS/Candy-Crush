import React, { createContext, useState } from 'react'

export const scoreContext = createContext()
const ScoreProvider = ({ children }) => {
    const [score, setScore] = useState(0)
    const [count, setCount] = useState(0);
    return (
        <scoreContext.Provider value={{ score, setScore, count, setCount }}>
            {children}
        </scoreContext.Provider>
    )
}

export default ScoreProvider