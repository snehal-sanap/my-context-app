import React, { useContext } from 'react'
import UserContext from './UserContext'
import ThemeContext from './ThemeContext'

const Navbar = () => {

    const { user } = useContext(UserContext)
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <nav
            className={
                theme === "light"
                    ? "sticky top-0 z-50 border-b border-slate-200 bg-white/90 px-4 py-4 shadow-sm backdrop-blur-md sm:px-6 lg:px-8"
                    : "sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 px-4 py-4 shadow-sm backdrop-blur-md sm:px-6 lg:px-8"
            }
        >

            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">

                {/* Logo / App Name */}
                <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg text-white shadow-sm">
                        ⚡
                    </div>

                    <div>
                        <h2
                            className={
                                theme === "light"
                                    ? "text-lg font-bold text-slate-900 sm:text-xl"
                                    : "text-lg font-bold text-white sm:text-xl"
                            }
                        >
                            Context Dashboard
                        </h2>

                        <p
                            className={
                                theme === "light"
                                    ? "hidden text-xs text-slate-500 sm:block"
                                    : "hidden text-xs text-slate-400 sm:block"
                            }
                        >
                            React Context API
                        </p>
                    </div>

                </div>

                {/* User + Theme */}
                <div className="flex items-center gap-3">

                    {/* User */}
                    <div className="hidden text-right sm:block">

                        <p
                            className={
                                theme === "light"
                                    ? "text-xs text-slate-500"
                                    : "text-xs text-slate-400"
                            }
                        >
                            Welcome
                        </p>

                        <p
                            className={
                                theme === "light"
                                    ? "text-sm font-semibold text-slate-900"
                                    : "text-sm font-semibold text-white"
                            }
                        >
                            {user.name}
                        </p>

                    </div>

                    {/* Theme Button */}
                    <button
                        onClick={toggleTheme}
                        className={
                            theme === "light"
                                ? "rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition duration-200 hover:bg-slate-100 hover:shadow-sm sm:px-4"
                                : "rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm font-medium text-slate-200 transition duration-200 hover:bg-slate-700 hover:shadow-sm sm:px-4"
                        }
                    >
                        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                    </button>

                </div>

            </div>

        </nav>
    )
}

export default Navbar