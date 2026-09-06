import React, { useContext } from 'react'
import UserContext from './UserContext'
import ThemeContext from './ThemeContext'

const Settings = () => {

    const { user, changeUser } = useContext(UserContext)
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className="mt-10">

            {/* Settings Header */}
            <div className="mb-6">
                <h2
                    className={
                        theme === "light"
                            ? "text-2xl font-bold text-slate-900"
                            : "text-2xl font-bold text-white"
                    }
                >
                    ⚙️ Settings
                </h2>

                <p
                    className={
                        theme === "light"
                            ? "mt-1 text-sm text-slate-500"
                            : "mt-1 text-sm text-slate-400"
                    }
                >
                    Manage your account and appearance preferences.
                </p>
            </div>

            {/* Settings Grid */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* User Settings */}
                <div
                    className={
                        theme === "light"
                            ? "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            : "rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm"
                    }
                >

                    <div className="mb-5 flex items-center gap-3">
                        <div
                            className={
                                theme === "light"
                                    ? "flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100"
                                    : "flex h-10 w-10 items-center justify-center rounded-lg bg-blue-950"
                            }
                        >
                            👤
                        </div>

                        <div>
                            <h3
                                className={
                                    theme === "light"
                                        ? "font-semibold text-slate-900"
                                        : "font-semibold text-white"
                                }
                            >
                                User Settings
                            </h3>

                            <p
                                className={
                                    theme === "light"
                                        ? "text-sm text-slate-500"
                                        : "text-sm text-slate-400"
                                }
                            >
                                Manage your active user
                            </p>
                        </div>
                    </div>

                    <div
                        className={
                            theme === "light"
                                ? "mb-5 rounded-lg bg-slate-50 p-4"
                                : "mb-5 rounded-lg bg-slate-800 p-4"
                        }
                    >
                        <p
                            className={
                                theme === "light"
                                    ? "text-sm text-slate-500"
                                    : "text-sm text-slate-400"
                            }
                        >
                            Current User
                        </p>

                        <p
                            className={
                                theme === "light"
                                    ? "mt-1 font-semibold text-slate-900"
                                    : "mt-1 font-semibold text-white"
                            }
                        >
                            {user.name}
                        </p>
                    </div>

                    <button
                        onClick={changeUser}
                        className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition duration-200 hover:bg-blue-700"
                    >
                        Change User
                    </button>

                </div>

                {/* Appearance */}
                <div
                    className={
                        theme === "light"
                            ? "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            : "rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm"
                    }
                >

                    <div className="mb-5 flex items-center gap-3">
                        <div
                            className={
                                theme === "light"
                                    ? "flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100"
                                    : "flex h-10 w-10 items-center justify-center rounded-lg bg-amber-950"
                            }
                        >
                            🎨
                        </div>

                        <div>
                            <h3
                                className={
                                    theme === "light"
                                        ? "font-semibold text-slate-900"
                                        : "font-semibold text-white"
                                }
                            >
                                Appearance
                            </h3>

                            <p
                                className={
                                    theme === "light"
                                        ? "text-sm text-slate-500"
                                        : "text-sm text-slate-400"
                                }
                            >
                                Customize your interface
                            </p>
                        </div>
                    </div>

                    <div
                        className={
                            theme === "light"
                                ? "mb-5 rounded-lg bg-slate-50 p-4"
                                : "mb-5 rounded-lg bg-slate-800 p-4"
                        }
                    >
                        <p
                            className={
                                theme === "light"
                                    ? "text-sm text-slate-500"
                                    : "text-sm text-slate-400"
                            }
                        >
                            Current Theme
                        </p>

                        <p
                            className={
                                theme === "light"
                                    ? "mt-1 font-semibold capitalize text-slate-900"
                                    : "mt-1 font-semibold capitalize text-white"
                            }
                        >
                            {theme}
                        </p>
                    </div>

                    <button
                        onClick={toggleTheme}
                        className="w-full rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-medium text-white transition duration-200 hover:bg-slate-700"
                    >
                        {theme === "light"
                            ? "🌙 Switch to Dark"
                            : "☀️ Switch to Light"}
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Settings