import { useState } from "react"
import Navbar from "../components/NavbarForHome"
import Button from "../components/ui/button"

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true)

    const toggleAuthMode = () => {
        setIsLogin(!isLogin)
    }

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-dark-slate text-white flex items-center justify-center">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm mb-2">Email</label>
                            <input type="email" className="w-full p-2 rounded bg-gray-700 text-white" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm mb-2">Password</label>
                            <input type="password" className="w-full p-2 rounded bg-gray-700 text-white" required />
                        </div>
                        {!isLogin && (
                            <div className="mb-4">
                                <label className="block text-sm mb-2">Confirm Password</label>
                                <input type="password" className="w-full p-2 rounded bg-gray-700 text-white" required />
                            </div>
                        )}
                        <Button className="w-full bg-gaming-blue transition-colors hover:bg-purple-400" type="submit">
                            {isLogin ? "Login" : "Sign Up"}
                        </Button>
                    </form>
                    <Button
                        className="mt-4 w-full bg-gray-600 transition-colors hover:bg-gray-700"
                        onClick={toggleAuthMode}
                    >
                        {isLogin ? "Create an account" : "Already have an account? Login"}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Auth