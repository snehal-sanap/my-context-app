import React, { useContext } from 'react'
import Dashboard from './Dashboard'
import { UserProvider } from './UserContext'
import ThemeContext from './ThemeContext'
import Navbar from './Navbar'
import Settings from './Settings'

const App = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={
            theme === "light"
                ? "min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300"
                : "min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300"} >

            <UserProvider>
                <Navbar />
                <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">

                    <div className="mb-8">
                        <h1 className={theme === "light"
                            ? "text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                            : "text-3xl font-bold tracking-tight text-white sm:text-4xl"} >
                            Context API App
                        </h1>

                        <p className={theme === "light"
                            ? "mt-2 text-slate-500"
                            : "mt-2 text-slate-400"}>
                            A React application powered by Context API
                        </p>
                    </div>

                    <Dashboard />
                    <Settings />
                </main>
            </UserProvider>
        </div>
    )
}

export default App