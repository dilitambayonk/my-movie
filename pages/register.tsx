import { useState } from "react"
import BackButton from "../src/components/atoms/BackButton/BackButton"
import HomeTemplate from "../src/components/templates/HomeTemplate/HomeTemplate"
import { serviceAPI } from "../src/services/API"

const RegisterPage = () => {
	const [dataUser, setDataUser] = useState({})

	const handleChangeInput = (e: any) => {
		const { name, value } = e.target
		setDataUser({ ...dataUser, [name]: value })
	}

	const handleSubmit = () => {
		registerUser()
	}

	const registerUser = async () => {
		const res: any = await serviceAPI.registerUser(dataUser)

		if (res) {
			console.log(res)
		}
	}

	return (
		<HomeTemplate>
			<BackButton />
			<div className="p-2 min-h-screen grid place-items-center">
				<div className="p-4 w-full md:w-80 max-w-lg bg-slate-800 flex flex-col rounded-lg">
					<input onChange={handleChangeInput} className="my-2 px-3 py-2 w-full rounded-lg" type="text" name="username" placeholder="Username" />
					<input onChange={handleChangeInput} className="my-2 px-3 py-2 w-full rounded-lg" type="email" name="email" placeholder="Email" />
					<input onChange={handleChangeInput} className="my-2 px-3 py-2 w-full rounded-lg" type="password" name="password" placeholder="Password" />
					<button onClick={handleSubmit} className="my-2 px-3 py-2 w-full rounded-lg bg-red-600 hover:bg-red-700">
						Register
					</button>
				</div>
			</div>
		</HomeTemplate>
	)
}

export default RegisterPage
