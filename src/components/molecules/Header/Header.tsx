import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"

const Header = () => {
	const router = useRouter()
	const [showMenu, setShowMenu] = useState(false)
	const [isLogin, setIsLogin] = useState(false)

	useEffect(() => {
		window.localStorage.getItem("token") && setIsLogin(true)
	}, [])

	const handleLogout = () => {
		window.localStorage.removeItem("token")
		window.localStorage.removeItem("user")
		setIsLogin(false)
		router.push("/")
	}

	return (
		<div className="p-4 mb-6 flex justify-between">
			<h1 className="text-xl font-bold">MyMOVIE</h1>
			<button onClick={() => setShowMenu(!showMenu)} className="sm:hidden">
				<FaBars size="1.5em" />
			</button>
			{showMenu && <div onClick={() => setShowMenu(false)} className="absolute z-40 inset-0 bg-slate-900 opacity-70" />}
			<div className={`flex gap-2 flex-col sm:flex-row sm:static sm:bg-transparent sm:w-max sm:p-0 absolute bg-slate-800 -left-2/3 top-0 p-4 w-2/3 h-full z-50 transition ease-in-out ${showMenu && "translate-x-full"}`}>
				{!isLogin && (
					<>
						<Link href="/login">
							<button className="px-4 py-1 bg-red-600 rounded-lg w-full">Login</button>
						</Link>
						<Link href="/register">
							<button className="px-4 py-1 text-red-600 border border-red-600 rounded-lg w-full">Register</button>
						</Link>
					</>
				)}
				{isLogin && (
					<button onClick={handleLogout} className="px-4 py-1 text-red-600 border border-red-600 rounded-lg w-full">
						Logout
					</button>
				)}
			</div>
		</div>
	)
}

export default Header
