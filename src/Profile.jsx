import React, { useContext } from 'react'
import UserContext from './UserContext'
import ThemeContext from './ThemeContext'

const Profile = () => {

    const { user, changeUser } = useContext(UserContext)
    const { theme } = useContext(ThemeContext)

    return (
        <div
            className={
                theme === "light"
                    ? "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                    : "overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-sm"
            }
        >

            {/* Profile Header */}
            <div
                className={
                    theme === "light"
                        ? "border-b border-slate-200 px-6 py-5"
                        : "border-b border-slate-800 px-6 py-5"
                }
            >
                <h2
                    className={
                        theme === "light"
                            ? "text-xl font-bold text-slate-900"
                            : "text-xl font-bold text-white"
                    }
                >
                    👤 User Profile
                </h2>

                <p
                    className={
                        theme === "light"
                            ? "mt-1 text-sm text-slate-500"
                            : "mt-1 text-sm text-slate-400"
                    }
                >
                    Your current account information
                </p>
            </div>

            {/* Profile Content */}
            <div className="flex flex-col gap-6 px-6 py-6 sm:flex-row sm:items-center">

                {/* Avatar */}
                <div
                    className={
                        theme === "light"
                            ? "flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-100 text-4xl"
                            : "flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-950 text-4xl"
                    }
                >
                    👤
                </div>

                {/* User Information */}
                <div className="flex-1">

                    <h3
                        className={
                            theme === "light"
                                ? "text-2xl font-bold text-slate-900"
                                : "text-2xl font-bold text-white"
                        }
                    >
                        {user.name}
                    </h3>

                    <p
                        className={
                            theme === "light"
                                ? "mt-1 text-slate-500"
                                : "mt-1 text-slate-400"
                        }
                    >
                        {user.email}
                    </p>

                    <span
                        className={
                            theme === "light"
                                ? "mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium capitalize text-blue-700"
                                : "mt-3 inline-block rounded-full bg-blue-950 px-3 py-1 text-sm font-medium capitalize text-blue-300"
                        }
                    >
                        {user.role}
                    </span>

                </div>

                {/* Action */}
                <div>
                    <button
                        onClick={changeUser}
                        className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition duration-200 hover:bg-blue-700 hover:-translate-y-0.5"
                    >
                        Change User
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Profile