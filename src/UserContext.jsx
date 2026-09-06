import React, { createContext, useState } from 'react'

const UserContext = createContext();

const snehal = { name: "Snehal", email: "snehal@mail.com", role: "dev" }
const samyak = { name: "Samyak", email: "samyak@mail.com", role: "tester" }

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(snehal)

    const changeUser = () => {
        if (user.name === "Snehal") {
            setUser(samyak)
        } else {
            setUser(snehal)
        }
    }

    return (
        <UserContext.Provider value={{ user, changeUser }}>
            {children}
        </UserContext.Provider>

    )
}

export default UserContext