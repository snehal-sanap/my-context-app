import React, { useContext } from 'react'
import Profile from './Profile'
import UserContext from './UserContext'
import ThemeContext from './ThemeContext'

const Dashboard = () => {

    const { user } = useContext(UserContext)
    const { theme } = useContext(ThemeContext)

    return (
        <div className="space-y-8">

            {/* Dashboard Header */}
            <div>
                <h2
                    className={
                        theme === "light"
                            ? "text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
                            : "text-2xl font-bold tracking-tight text-white sm:text-3xl"
                    }
                >
                    Welcome back, {user.name}
                </h2>

                <p
                    className={
                        theme === "light"
                            ? "mt-2 text-slate-500"
                            : "mt-2 text-slate-400"
                    }
                >
                    Here's your account overview.
                </p>
            </div>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

                {/* User Card */}
                <div
                    className={
                        theme === "light"
                            ? "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                            : "rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                    }
                >
                    <h4 className="mb-3 text-sm font-medium text-slate-500">
                        👤 User
                    </h4>

                    <p
                        className={
                            theme === "light"
                                ? "text-lg font-semibold text-slate-900"
                                : "text-lg font-semibold text-white"
                        }
                    >
                        {user.name}
                    </p>
                </div>

                {/* Email Card */}
                <div
                    className={
                        theme === "light"
                            ? "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                            : "rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                    }
                >
                    <h4 className="mb-3 text-sm font-medium text-slate-500">
                        ✉️ Email
                    </h4>

                    <p
                        className={
                            theme === "light"
                                ? "break-words text-lg font-semibold text-slate-900"
                                : "break-words text-lg font-semibold text-white"
                        }
                    >
                        {user.email}
                    </p>
                </div>

                {/* Role Card */}
                <div
                    className={
                        theme === "light"
                            ? "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                            : "rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                    }
                >
                    <h4 className="mb-3 text-sm font-medium text-slate-500">
                        ⚡ Role
                    </h4>

                    <p
                        className={
                            theme === "light"
                                ? "text-lg font-semibold capitalize text-slate-900"
                                : "text-lg font-semibold capitalize text-white"
                        }
                    >
                        {user.role}
                    </p>
                </div>

                {/* Theme Card */}
                <div
                    className={
                        theme === "light"
                            ? "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                            : "rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                    }
                >
                    <h4 className="mb-3 text-sm font-medium text-slate-500">
                        🎨 Theme
                    </h4>

                    <p
                        className={
                            theme === "light"
                                ? "text-lg font-semibold capitalize text-slate-900"
                                : "text-lg font-semibold capitalize text-white"
                        }
                    >
                        {theme}
                    </p>
                </div>

            </div>

            {/* Profile */}
            <Profile />

        </div>
    )
}

export default Dashboard