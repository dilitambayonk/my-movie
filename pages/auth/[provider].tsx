import { useRouter } from "next/router"
import Loader from "../../src/components/atoms/Loader/Loader"
import HomeTemplate from "../../src/components/templates/HomeTemplate/HomeTemplate"
import { serviceAPI } from "../../src/services/API"

interface ProviderAuthInterface {
	dataUser: any
}

const ProviderAuth = (props: ProviderAuthInterface) => {
	const { jwt, user } = props.dataUser
	const router = useRouter()
	const isServer = typeof window === "undefined"

	if (!isServer) {
		localStorage.setItem("token", jwt)
		localStorage.setItem("user", JSON.stringify(user))

		router.push("/")
	}

	return (
		<HomeTemplate>
			<div className="h-screen grid content-center">
				<Loader />
			</div>
		</HomeTemplate>
	)
}

export default ProviderAuth

export const getServerSideProps = async (context: any) => {
	const { provider } = context.params
	const { access_token } = context.query

	const res: any = await serviceAPI.loginProvider(provider, access_token)

	if (res) {
		console.log(res)
	}

	return {
		props: {
			dataUser: res,
		},
	}
}
