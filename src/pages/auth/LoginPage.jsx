import React from 'react'
import SygisLogo from '@/assets/logos/logo-sygis.png'
import GoogleLogo from '@/assets/logos/logo-google.png'

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center h-screen h-14 bg-linear-to-t from-slate-500 to-slate-800">
            <div className="bg-transparent border border-slate-500 rounded-lg shadow-lg p-12 w-full max-w-lg">

                <div className="text-center mb-8">
                    <img
                        src={SygisLogo}
                        alt="SIGIS Logo"
                        className="w-[100px] h-auto mx-auto rounded-xl shadow-md transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                    />
                    <span className="mt-4 text-2xl font-bold text-white">SYGIS</span>
                </div>

                <form>
                    <div className="mb-5">
                        <label htmlFor="username" className="block text-white text-base font-semibold mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            className="shadow appearance-none border rounded w-full py-3 px-4 bg-transparent text-white text-base placeholder-gray-300 focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-white text-base font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow appearance-none border rounded w-full py-3 px-4 bg-transparent text-white text-base placeholder-gray-300 focus:outline-none focus:shadow-outline"
                            placeholder="Password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-black hover:bg-gray-900 text-white font-bold w-full py-3 text-base rounded focus:outline-none focus:shadow-outline cursor-pointer"
                    >
                        Login
                    </button>

                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-400" />
                        <span className="mx-3 text-base text-gray-100">or continue with</span>
                        <hr className="flex-grow border-gray-400" />
                    </div>

                    <button className="relative w-full bg-white text-gray-700 py-3 rounded flex items-center justify-center shadow-sm hover:shadow-md transition cursor-pointer">
                        <span className="absolute left-4">
                            <img src={GoogleLogo} alt="Google Logo" className="w-6 h-6" />
                        </span>
                        <span className="text-base font-medium">Google</span>
                    </button>

                    <p className="text-sm text-gray-300 mt-8 text-center">
                        Terms of Service and{" "}
                        <a href="#" className="text-white underline font-medium">
                            Privacy Policy
                        </a>
                    </p>
                </form>
            </div>
        </div>

    )
}

export default LoginPage