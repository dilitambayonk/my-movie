import { useRouter } from "next/router"
import { useState } from "react"
import BackButton from "../src/components/atoms/BackButton/BackButton"
import HomeTemplate from "../src/components/templates/HomeTemplate/HomeTemplate"
import { serviceAPI } from "../src/services/API"

const LoginPage = () => {
	const router = useRouter()
	const [dataUser, setDataUser] = useState({})

	const handleChangeInput = (e: any) => {
		const { name, value } = e.target
		setDataUser({ ...dataUser, [name]: value })
	}

	const handleSubmit = () => {
		loginUser()
	}

	const loginUser = async () => {
		const res: any = await serviceAPI.loginUser(dataUser)

		if (res) {
			// console.log(res)
			window.localStorage.setItem("token", res.jwt)
			window.localStorage.setItem("user", JSON.stringify(res.user))
			router.push("/")
		} else {
		}
	}

	return (
		<HomeTemplate>
			<BackButton />
			<div className="p-2 min-h-screen grid place-items-center">
				<div className="p-4 w-full md:w-80 max-w-lg bg-slate-800 flex flex-col rounded-lg">
					<input onChange={handleChangeInput} className="my-2 px-3 py-2 w-full rounded-lg" type="email" name="identifier" placeholder="Email" />
					<input onChange={handleChangeInput} className="my-2 px-3 py-2 w-full rounded-lg" type="password" name="password" placeholder="Password" />
					<button onClick={handleSubmit} className="my-2 px-3 py-2 w-full rounded-lg bg-red-600 hover:bg-red-700">
						Login
					</button>
					<hr className="mx-10 my-5 border-0 h-px bg-slate-600" />
					<a href={process.env.NEXT_PUBLIC_API + "/connect/github"}>
						<button onClick={handleSubmit} className="my-2 px-3 py-2 w-full text-slate-400 rounded-lg border-2 border-slate-700 hover:bg-slate-700">
							Login with Github
						</button>
					</a>
				</div>
			</div>
		</HomeTemplate>
	)
}

export default LoginPage
